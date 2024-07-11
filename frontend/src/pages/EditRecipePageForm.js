import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRecipePageForm = ({ recipeToEdit }) => {

    const [recipeName, setRecipeName]       = useState(recipeToEdit.recipeName);
    const [ingredients, setIngredients]         = useState(recipeToEdit.ingredients);
    const [instructions, setInstructions] = useState(recipeToEdit.instructions);
    const [numIngredients, setNumIngredients] = useState(recipeToEdit.numIngredients);
    const [dateCreated, setDateCreated] = useState(recipeToEdit.dateCreated.slice(0,10));
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`https://web-dev-portfolio-mern-app-8277e063b97b.herokuapp.com/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                recipeName: recipeName, 
                ingredients: ingredients, 
                instructions: instructions,
                numIngredients: numIngredients,
                dateCreated: dateCreated
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The recipe for '${recipeName}' was successfully updated.`);
        } else {
            const errMessage = await response.json();
            alert(`The recipe could not be updated. The status code is '${response.status}.' The error message is: '${errMessage.Error}.'`);
        }
        redirect("https://web-dev-portfolio-mern-app-8277e063b97b.herokuapp.com/recipes");
    }

    return (
        <>
        <article>
            <h2>Edit a recipe</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which recipe are you editing?</legend>
                    <label for="name">Recipe Name</label>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={e => setRecipeName(e.target.value)} 
                        id="name" />
                    
                    <label for="ingredients">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)} 
                        id="ingredients" />

                    <label for="instructions">Instructions</label>
                    <textarea
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
                        value={dateCreated}
                        onChange={e => setDateCreated(e.target.value)} 
                        id="dateCreated" />

                    <label for="submit">
                    <button
                        onClick={editRecipe}
                        id="submit"
                    >Save</button> updates to the recipe collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditRecipePageForm;