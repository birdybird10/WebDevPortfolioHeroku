import React from 'react';
import Recipe from './Recipe';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <table id="recipes">
            <caption>Current Recipes:</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Number of Ingredients</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe, i) => 
                    <Recipe 
                        recipe={recipe} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RecipeList;
