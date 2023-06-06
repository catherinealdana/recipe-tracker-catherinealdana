import React, { useState } from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import "./App.css";

// TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  //setting recipe state 
  const [recipes, setRecipes] = useState(RecipeData);

  //creating two functions to add and delete recipes
  const addRecipe = (newRecipe) => {
    setRecipes([ ...recipes, newRecipe ]);
  };

  function deleteRecipe(recipeIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== recipeIndex));
  };

  //Return the rendered page using components
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
