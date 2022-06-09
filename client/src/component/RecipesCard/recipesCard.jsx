import React from "react";
import { Link } from "react-router-dom";
import a from "./recipesCard.module.css";

const RecipesCard = (props) => {
  return (
    <div className={a.Countainer}>
      <img src={props.image} alt="Not Found"></img>
      <Link className={a.Link} to="/recipes/name">
        <h1 className={a.Title}>{props.title}</h1>
      </Link>
      <p>{props.diets}</p>
    </div>
  );
};

export default RecipesCard;
