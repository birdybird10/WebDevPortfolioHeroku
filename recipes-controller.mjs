// Controllers for the Recipe Collection

import 'dotenv/config';
import express from 'express';
import * as recipes from './recipes-model.mjs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = process.env.PORT;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend", "build")))
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/recipes', (req,res) => { 
    recipes.createRecipe(
        req.body.recipeName, 
        req.body.ingredients, 
        req.body.instructions,
        req.body.numIngredients,
        req.body.dateCreated
        )
        .then(recipe => {
            console.log(`Successfully added "${recipe.recipeName}" to recipes_db.`);
            res.status(201).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `An invalid request was made by the client. The server cannot process the request. The recipe could not be created.` });
        });
});


// RETRIEVE controller ****************************************************
app.get('/recipes', (req, res) => {
    recipes.retrieveRecipes()
        .then(recipes => { 
            if (recipes !== null) {
                console.log(`All recipes have been retrieved from recipes_db.`);
                res.json(recipes);
            } else {
                res.status(404).json({ Error: 'No recipes could be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An invalid request was made by the client. The server cannot process the request.' });
        });
});


// RETRIEVE by ID controller
app.get('/recipes/:_id', (req, res) => {
    recipes.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            console.log(`"${recipe.recipeName}" was retrieved, using its ID.`);
            res.json(recipe);
        } else {
            res.status(404).json({ Error: `The recipe "${recipe.recipeName}" could not be found.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'An invalid request was made by the client. The server cannot process the request.' });
    });

});


// UPDATE controller ************************************
app.put('/recipes/:_id', (req, res) => {
    recipes.updateRecipe(
        req.params._id, 
        req.body.recipeName, 
        req.body.ingredients, 
        req.body.instructions,
        req.body.numIngredients,
        req.body.dateCreated
    )
    .then(recipe => {
        console.log(`The recipe "${recipe.recipeName}" has been successfully updated.`);
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'An invalid request was made by the client. The server cannot process the request. The recipe was not updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`${deletedCount} recipe has been deleted using its ID.`);
                res.status(200).send({ Success: 'The requested recipe has successfully been deleted.' });
            } else {
                res.status(404).json({ Error: 'The recipe could not be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An invalid request was made by the client. The server cannot process the request. No recipe was deleted.' });
        });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT || 3000, () => {
    console.log(`Server listening on port ${PORT}...`);
});