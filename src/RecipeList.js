import React, { useState } from "react";
import Recipe from "./Recipe";
import "./styles.css";

export default function RecipeList() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
  const [myRecipes, setRecipes] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);

  // fetch recipe from API
  function fetchRecipes() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
      .then(recipeExists => setRecipeExists(true))
      .catch(console.log("Error"));
  }

  function onDeleteHandler(index) {
    setRecipes(
      myRecipes.filter((element, filterIndex) => index !== filterIndex)
    );
  }

  function RecipeComponents() {
    let temp;
    if (recipeExists) {
      temp = myRecipes.map((element, index) => (
        <Recipe
          data={element}
          index={index}
          key={index}
          onDelete={onDeleteHandler}
        />
      ));
      return temp;
    }
  }

  return (
    <div>
      <div>
        {/* 
        Move header to App component in later version when using router/paths
        */}
        <div className="header-wrapper">
          <h1>J&G's Cookbook</h1>
          <button
            className="btn btn-info cb-button fetch-button"
            onClick={fetchRecipes}
          >
            Fetch Recipes
          </button>
        </div>
        <br />
        {recipeExists ? (
          <div>
            <RecipeComponents />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
