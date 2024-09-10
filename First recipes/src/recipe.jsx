import React from "react";
import "./recipe.css";

const Recipe = ({
  title,

  recipeImageURL,
  ingredients,
  instructions,
  nutritionalInformation,
  time,
}) => {
  return (
    <div className="Recipe">
      <h1>{Recipe.title}</h1>
      <img className={Recipe.image} src={Recipe.recipeImageURL} alt="" />
      <ol>{Recipe.ingredients(<li>{ingredients.text}</li>)}</ol>

      <ol>{Recipe.instructions(<li>{instructions.text}</li>)}</ol>

      <p>Nutritional Information: {Recipe.nutritionalInformation}</p>
      <p> Prep Time: {Recipe.time}</p>
    </div>
  );
};
export default Recipe;
