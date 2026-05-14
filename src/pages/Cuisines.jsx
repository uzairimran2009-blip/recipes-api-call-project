import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cuisines = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setRecipes(res.data.recipes);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const filteredRecipes = search
    ? recipes.filter(
        (item) => item.cuisine.toLowerCase() === search.toLowerCase(),
      )
    : recipes;

  const cuisines = [...new Set(filteredRecipes.map((r) => r.cuisine))];

  return (
    <div className="container">
      <h1 className="title">Cuisines Page</h1>
      <p className="description">
        Explore recipes from different cuisines around the world.
      </p>

      <input
        type="text"
        placeholder="Search cuisine (Indian, Italian, Mexican...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      {cuisines.map((cuisine) => (
        <div className="section" key={cuisine}>
          <h2 className="section-title">{cuisine} Recipes</h2>

          <div className="grid">
            {filteredRecipes
              .filter((item) => item.cuisine === cuisine)
              .map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>
                      <strong>Difficulty:</strong> {item.difficulty}
                    </p>

                    <p>
                      <strong>Rating:</strong> ⭐ {item.rating}
                    </p>

                    <p>
                      <strong>Prep Time:</strong>
                      {` ${item.prepTimeMinutes}`} mins
                    </p>

                    <div className="tags">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="more">+{item.tags.length - 3}</span>
                      )}
                    </div>

                    <Link to={`/recipe/${item.id}`}>
                      <button>View Recipe</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cuisines;
