import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";



function Recipe({ recipe, onEdit, onDelete }) {
    return (
        <tr>
            <td>{recipe.recipeName}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instructions}</td>
            <td>{recipe.numIngredients}</td>
            <td>{recipe.dateCreated.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin5Line size={20} onClick={() => onDelete(recipe._id)} /></td>
            <td><RiEdit2Line size={20} onClick={() => onEdit(recipe)} /></td>
        </tr>
    );
}

export default Recipe;