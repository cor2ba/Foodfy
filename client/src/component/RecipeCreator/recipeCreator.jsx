import React from "react";
import a from "./recipeCreator.module.css";
import { Link } from "react-router-dom";

const RecipeCreator = () => {
  return (
    <div className={a.Parent}>
      <div className={a.Countainer}>
        <h1 className={a.Title}>WELCOME TO RECIPE CREATOR</h1>
        <form className={a.Form}>
          <label className={a.Subtitle}>TITLE OF THE RECIPE :</label>
          <input className={a.InputCreate} placeholder="TITLE..."></input>
          <label className={a.Subtitle}>MAKE A SUMMARY OF THE RECIPE :</label>
          <input className={a.InputCreate} placeholder="SUMMARY..."></input>
          <label className={a.Subtitle}>
            MAKE A STEP TO STEP OF THE RECIPE :
          </label>
          <input
            className={a.InputCreate}
            placeholder="STEP TO STEP..."
          ></input>
          <label className={a.Subtitle}>CHOOSE A CUSTOMER HEALTH SCORE :</label>
          <input
            type="number"
            placeholder="HEALTH SCORE..."
            min={0}
            max={100}
            className={a.InputCreate}
          ></input>
          <label className={a.Subtitle}>
            CHOOSE WHAT TYPE OF DIET USE YOUR RECIPE :
          </label>
          <select className={a.SelectDiet}>
            <option className={a.CreatorOption} value="">
              GLUTEN FREE
            </option>
            <option className={a.CreatorOption} value="">
              KETOGENIC
            </option>
            <option className={a.CreatorOption} value="">
              LACTO VEGETARIAN
            </option>
            <option className={a.CreatorOption} value="">
              OVO VEGETARIAN
            </option>
            <option className={a.CreatorOption} value="">
              KETOGENIC
            </option>
            <option className={a.CreatorOption} value="">
              VEGAN
            </option>
            <option className={a.CreatorOption} value="">
              PESCETARIAN
            </option>
            <option className={a.CreatorOption} value="">
              PALEO
            </option>
            <option className={a.CreatorOption} value="">
              PRIMAL
            </option>
            <option className={a.CreatorOption} value="">
              LOW FODMAP
            </option>
            <option className={a.CreatorOption} value="">
              WHOLE 30
            </option>
          </select>
          <button className={a.Submit} type="submit">
            SEND
          </button>
          <Link to="/recipes">
            <img
              className={a.Img}
              src="https://cdn-icons-png.flaticon.com/128/4885/4885344.png"
              alt="Not Found"
            ></img>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreator;
