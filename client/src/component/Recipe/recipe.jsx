import React from "react";
import a from "./recipe.module.css";
import img from "../../imgs/chefhat.png";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerNav}>
        <Link to="/">
          <img className={a.IcoImg} src={img} alt="Logo not found"></img>
        </Link>
        <h1 className={a.Title}>FOOD APP</h1>
        <select className={a.DietOrderSelect}>
          <option value="">ALL DIETS...</option>
          <option className={a.DietOption} value="">
            KETOGENIC
          </option>
          <option className={a.DietOption} value="">
            VEGETARIAN
          </option>
          <option className={a.DietOption} value="">
            LACTO VEGETARIAN
          </option>
          <option className={a.DietOption} value="">
            OVO VEGETARIAN
          </option>
          <option className={a.DietOption} value="">
            VEGAN
          </option>
          <option className={a.DietOption} value="">
            PESCETARIAN
          </option>
          <option className={a.DietOption} value="">
            PALEO
          </option>
          <option className={a.DietOption} value="">
            PRIMAL
          </option>
          <option className={a.DietOption} value="">
            LOW FODMAP
          </option>
          <option className={a.DietOption} value="">
            WHOLE 30
          </option>
        </select>
        <select className={a.AlphabeticOrder}>
          <option value="">ANY ALPHABETICAL ORDER...</option>
          <option className={a.AlphabeticOption} value="">
            ASCENDANCY
          </option>
          <option className={a.AlphabeticOption} value="">
            DESCENDANT
          </option>
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
