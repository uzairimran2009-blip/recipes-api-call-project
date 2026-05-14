import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🍽️ RecipeApp</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/cuisines">Cuisines</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
