import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";

function RecipesPage({ setRecipe }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('/recipes');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        redirect("/update");
    }


    // DELETE a single recipe
    const onDeleteRecipe = async _id => {
        const response = await fetch(`/recipes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/recipes');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`The recipe with id = ${_id} could not be deleted. The status code = ${response.status}`)
        }
    }

    const addRecipe = () => redirect('/create')

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>
            <h2>List of Recipes</h2>
            <p>On this page you can view current recipes, delete and edit these recipes
                (using the icons in the table), or add a new recipe (using the icon below).</p>
            <MdOutlineAddBox onClick={addRecipe} size={30} id="addRecipe"/> <span>Add a recipe</span>
            <RecipeList 
                recipes={recipes} 
                onEdit={onEditRecipe} 
                onDelete={onDeleteRecipe} 
            />
        </>
    );
}

export default RecipesPage;