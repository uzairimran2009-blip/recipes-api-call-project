import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipes = () => {
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

  return (
    <div className="container">
      <h1 className="title">Recipes Page</h1>
      <p className="description">
        Discover a variety of delicious recipes from around the world.
      </p>

      <input
        type="text"
        placeholder="Search cuisine (Indian, Italian, Mexican...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      <div className="grid">
        {filteredRecipes.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="card-body">
              <h3>{item.name}</h3>
              <p>
                <strong>Cuisine:</strong> {item.cuisine}
              </p>
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
  );
};

export default Recipes;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Recipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("https://dummyjson.com/recipes");
//         setRecipes(res.data.recipes);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="title">All Recipes</h2>

//       <div className="grid">
//         {recipes.map((item) => (
//           <div className="card" key={item.id}>
//             <img src={item.image} alt={item.name} />

//             <div className="card-body">
//               <h3>{item.name}</h3>
//               <p>⭐ {item.rating}</p>

//               <Link to={`/recipe/${item.id}`}>
//                 <button>View</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recipes;
