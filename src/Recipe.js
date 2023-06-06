import React from "react";
// TODO: Create at least one additional component that is used by this component.
function Recipe ({recipes, deleteRecipe}) {
    //Return the recipes in a list of table rows, consisting of their data.
    return recipes.map((recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={`Photo ${recipe.name}`} /></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
            </tr>
        );
    });
}

export default Recipe;