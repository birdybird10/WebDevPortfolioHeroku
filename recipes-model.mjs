// Models for the Recipe Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Could not connect to the MongoDB server.' });
    } else  {
        console.log('Successfully connected to the "recipes_db" database.');
    }
});

// SCHEMA: Define the collection's schema.
const recipeSchema = mongoose.Schema({
	recipeName:    { type: String, required: true },
    ingredients:    {type: String, required: true},
    instructions:    {type: String, required: true},
	numIngredients:     { type: Number, required: true },
	dateCreated: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "recipes".
const recipes = mongoose.model('Recipes', recipeSchema);


// CREATE model *****************************************
const createRecipe = async (recipeName, ingredients, instructions, numIngredients, dateCreated) => {
    const recipe = new recipes({ 
        recipeName: recipeName,
        ingredients: ingredients,
        instructions: instructions,
        numIngredients: numIngredients,
        dateCreated: dateCreated
    });
    return recipe.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRecipes = async () => {
    const query = recipes.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecipeByID = async (_id) => {
    const query = recipes.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecipeById = async (_id) => {
    const result = await recipes.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecipe = async (_id, recipeName, ingredients, instructions, numIngredients, dateCreated) => {
    const result = await recipes.replaceOne({_id: _id }, {
        recipeName: recipeName,
        ingredients: ingredients,
        instructions: instructions,
        numIngredients: numIngredients,
        dateCreated: dateCreated
    });
    return { 
        _id: _id, 
        recipeName: recipeName,
        ingredients: ingredients,
        instructions: instructions,
        numIngredients: numIngredients,
        dateCreated: dateCreated
    }
}

// EXPORT the variables for use in the controller file.
export { createRecipe, retrieveRecipes, retrieveRecipeByID, updateRecipe, deleteRecipeById }