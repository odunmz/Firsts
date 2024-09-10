import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [recipeImageURL, setRecipeImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [nutritionalInformation, setNutritionalInformation] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const clearForm = () => {
    setRecipeImageURL("");
    setTitle("");
    setIngredients("");
    setPrepTime("");
    setInstructions("");
    setNutritionalInformation("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(Array.from(formData));

    const fileUploadUrl = "http://localhost:3000/upload";
    axios
      .post(fileUploadUrl, formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "upload progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then(function (res) {
        console.log({ res });
        if (res.status === 200) {
          setSubmitted(true);
          setError(false);
          clearForm();
          navigate("/");
        } else {
          console.log("error ", res.body);
          setError(true);
          setSubmitted(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Recipe added successfully!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="form">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Add a Recipe</h2>
          <fieldset>
            <div className="Field">
              <label className="label">Image :</label>
              <input
                className="input"
                type="file"
                placeholder="Image"
                name="recipeImage"
              />
            </div>

            <div className="Field">
              <label className="label">Title :</label>
              <input
                className="input"
                type="text"
                placeholder="Title"
                name="title"
              />
            </div>

            <div className="Field">
              <label className="label">Ingredients :</label>
              <input
                required
                className="input"
                type="text"
                placeholder="ingredients"
                name="ingredients"
              />
            </div>

            <div className="Field">
              <label className="label">Prep Time :</label>
              <input
                required
                className="input"
                type="text"
                placeholder="Prep Time"
                name="prepTime"
              />
            </div>
            <div className="Field">
              <label className="label">Instructions :</label>
              <input
                required
                className="input"
                type="text"
                placeholder="Instructions"
                name="instructions"
              />
            </div>

            <div className="Field">
              <label className="label">Nutritional Information :</label>
              <input
                className="input"
                type="text"
                placeholder="Nutritional Information"
                name="nutritionalInformation"
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
