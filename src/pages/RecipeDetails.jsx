import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const getRecipe = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  });

  if (!recipe) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="details">
      <img src={recipe.image} alt={recipe.name} />

      <div className="right-side">
        <h1>{recipe.name}</h1>

        <p>
          <b>Cook Time:</b> {recipe.cookTimeMinutes} mins
        </p>
        <p>
          <b>Reviews:</b> {recipe.reviewCount}
        </p>
        <p>
          <b>Calories Per Serving:</b> ⭐ {recipe.caloriesPerServing} kcal
        </p>
        <p>
          <b>Servings:</b> {recipe.servings}
        </p>
        <p>
          <b>Meal Type:</b> {recipe.mealType}
        </p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            {recipe?.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
