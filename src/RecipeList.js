import React from "react";
import Recipe from "./Recipe";

  // TODO: Display the list of recipes using the structure of table that is provided.
  
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

function RecipeList({recipes, deleteRecipe}) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Recipe recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
