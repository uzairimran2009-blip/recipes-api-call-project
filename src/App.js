import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Cuisines from "./pages/Cuisines";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
