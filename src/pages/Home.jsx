import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <h1 className="title">🍽️ Welcome to Recipe World</h1>
      <p className="description">
        Explore delicious recipes from around the world
      </p>

      <Link to="/recipes">
        <button>Explore Recipes</button>
      </Link>
    </div>
  );
};

export default Home;
