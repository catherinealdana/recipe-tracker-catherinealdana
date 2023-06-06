import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers


function RecipeCreate({addRecipe}) {
  //Create an empty form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  //Create form state change variables
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  };

  //Create behavior for submit
  const handleSubmission = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  //Return the structured HTML Form
  return (
    <form name="create" onSubmit={handleSubmission}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" placeholder="Name" required={true} onChange={handleChange} value={formData.name} size="10"/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" required={true} onChange={handleChange} value={formData.cuisine} size="20" />
            </td>
            <td>
              <input id="photo" name="photo" type="url" placeholder="URL" required={true} onChange={handleChange} value={formData.photo} size="10" />
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients" required={true} onChange={handleChange} value={formData.ingredients} />
            </td>
            <td>
              <textarea id="preparation" name="preparation" type="text" placeholder="Preparation" required={true} onChange={handleChange} value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;