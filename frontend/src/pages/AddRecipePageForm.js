import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function recipeNames, and parameters 
// to fit your portfolio topic and schema.

export const AddRecipePageForm = () => {

    const [recipeName, setRecipeName]       = useState('');
    const [ingredients, setIngredients]         = useState('');
    const [instructions, setInstructions] = useState('');
    const [numIngredients, setNumIngredients] = useState(0);
    const [dateCreated, setDateCreated] = useState(new Date());
    
    const redirect = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { recipeName, ingredients, instructions, numIngredients, dateCreated };
        const response = await fetch('https://web-dev-portfolio-mern-app-8277e063b97b.herokuapp.com/recipes', {
            method: 'post',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The recipe for '${recipeName}' was successfully added.`);
            redirect("https://web-dev-portfolio-mern-app-8277e063b97b.herokuapp.com/recipes");
        } else {
            alert(`The recipe could not be added. The status code is '${response.status}.'`);
            redirect("https://web-dev-portfolio-mern-app-8277e063b97b.herokuapp.com/recipes");
        }
    };


    return (
        <>
        <article>
            <h2>Add a recipe</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Enter a recipe name</legend>
                    <label for="name">Recipe name</label>
                    <input
                        type="text"
                        placeholder="Name of the recipe"
                        value={recipeName}
                        onChange={e => setRecipeName(e.target.value)} 
                        id="name" />
                    
                    <label for="ingredients">Ingredients</label>
                    <textarea
                        value={ingredients}
                        placeholder="Ingredients for the recipe"
                        onChange={e => setIngredients(e.target.value)} 
                        id="ingredients" />

                    <label for="instructions">Instructions</label>
                    <textarea
                        placeholder="Instructions for the recipe"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)} 
                        id="instructions" />

                    <label for="numIngredients">Number of Ingredients</label>
                    <input
                        type="number"
                        value={numIngredients}
                        onChange={e => setNumIngredients(e.target.value)} 
                        id="numIngredients" />

                    <label for="dateCreated">Current Date</label>
                    <input
                        type="date"
                        onChange={e => setDateCreated(e.target.value)} 
                        id="dateCreated" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addRecipe}
                        id="submit"
                    >Add</button> to the collection of recipes</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddRecipePageForm;