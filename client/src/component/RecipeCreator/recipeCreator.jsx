import React from "react";
import a from "./recipeCreator.module.css";
import { Link } from "react-router-dom";
import img from "../../imgs/backicon.png";

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
            <option className={a.CreatorOption}>GLUTEN FREE</option>
            <option className={a.CreatorOption}>KETOGENIC</option>
            <option className={a.CreatorOption}>LACTO VEGETARIAN</option>
            <option className={a.CreatorOption}>OVO VEGETARIAN</option>
            <option className={a.CreatorOption}>KETOGENIC</option>
            <option className={a.CreatorOption}>VEGAN</option>
            <option className={a.CreatorOption}>PESCETARIAN</option>
            <option className={a.CreatorOption}>PALEO</option>
            <option className={a.CreatorOption}>PRIMAL</option>
            <option className={a.CreatorOption}>LOW FODMAP</option>
            <option className={a.CreatorOption}>WHOLE 30</option>
          </select>
          <button className={a.Submit} type="submit">
            SEND
          </button>
          <Link to="/recipes">
            <img className={a.Img} src={img} alt="Not Found"></img>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreator;
