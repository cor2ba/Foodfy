import React from "react";
import a from "./recipe.module.css";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerNav}>
        <Link className={a.Link} to="/">
          <h1 className={a.Title}>FOOD APP</h1>
        </Link>
        <select className={a.DietOrderSelect}>
          <option value="">ALL DIETS...</option>
          <option className={a.DietOption}>KETOGENIC</option>
          <option className={a.DietOption}>VEGETARIAN</option>
          <option className={a.DietOption}>LACTO VEGETARIAN</option>
          <option className={a.DietOption}>OVO VEGETARIAN</option>
          <option className={a.DietOption}>VEGAN</option>
          <option className={a.DietOption}>PESCETARIAN</option>
          <option className={a.DietOption}>PALEO</option>
          <option className={a.DietOption}>PRIMAL</option>
          <option className={a.DietOption}>LOW FODMAP</option>
          <option className={a.DietOption}>WHOLE 30</option>
        </select>
        <select className={a.AlphabeticOrder}>
          <option value="">ANY ALPHABETICAL ORDER...</option>
          <option className={a.AlphabeticOption}>ASCENDANCY</option>
          <option className={a.AlphabeticOption}>DESCENDANT</option>
        </select>
        <input
          className={a.SeachRecipes}
          placeholder="SEARCH RECIPE..."
        ></input>
        <Link to="/RecipeCreator">
          <button className={a.ButtonCreator}>
            ¿DO YOU WANT TO CREATE A NEW RECIPE?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
