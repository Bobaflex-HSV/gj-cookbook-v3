import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}
