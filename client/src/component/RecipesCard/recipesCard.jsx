import React from "react";
import { Link } from "react-router-dom";
import a from "./recipesCard.module.css";

const RecipesCard = (props) => {
  console.log(props);
  return (
    <div className={a.Countainer}>
      <img className={a.Img} src={props.image} alt="NOT FOUND"></img>
      <Link className={a.Link} to={`/recipes/${props.id}`}>
        <h1 className={a.Title}>{props.title}</h1>
      </Link>
      <h3 className={a.Subtitle}>DIETS:</h3>
      <ul className={a.CountainerUl}>
        <li className={a.Ul}>{props.diets.join(", ")}</li>
      </ul>
    </div>
  );
};

export default RecipesCard;