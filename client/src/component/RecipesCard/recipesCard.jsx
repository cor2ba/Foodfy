import React from "react";
import { Link } from "react-router-dom";
import a from "./recipesCard.module.css";

const RecipesCard = (props) => {
  return (
    <div className={a.Countainer}>
      <img className={a.Img} src={props.image} alt="NOT FOUND"></img>
      <h1 className={a.Title}>{props.title.toUpperCase()}</h1>
      <h3 className={a.Subtitle}>DIETS:</h3>
      <ul className={a.List}>
        {props.diets?.map((d) => {
          return (
            <li key={d} className={a.Ul}>
              {d.toUpperCase()}
            </li>
          );
        })}
      </ul>
      <Link className={a.Link} to={`/recipes/${props.id}`}>
        <button className={a.Details}>DETAILS</button>
      </Link>
    </div>
  );
};

export default RecipesCard;
