import React from "react";
import a from "./recipeCreator.module.css";

const RecipeCreator = () => {
  return (
    <div className={a.Parent}>
      <div className={a.Countainer}>
        <h1 className={a.Title}>WELCOME TO RECIPE CREATOR</h1>
        <div className={a.Form}>
          <h3>TITLE OF THE RECIPE :</h3>
          <input className={a.InputCreate} placeholder="TITLE..."></input>
          <h3>MAKE A SUMMARY OF THE RECIPE :</h3>
          <input className={a.InputCreate} placeholder="SUMMARY..."></input>
          <h3>CHOOSE A CUSTOMER HEALTH SCORE :</h3>
          <input
            className={a.InputCreate}
            placeholder="HEALTH SCORE..."
          ></input>
          <h3>MAKE A STEP TO STEP OF THE RECIPE :</h3>
          <input
            className={a.InputCreate}
            placeholder="STEP TO STEP..."
          ></input>
          <h3>CHOOSE WHAT TYPE OF DIET USE YOUR RECIPE :</h3>
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
        </div>
      </div>
    </div>
  );
};

export default RecipeCreator;
