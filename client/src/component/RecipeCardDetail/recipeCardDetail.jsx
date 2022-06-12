import React from "react";
import a from "./recipeCardDetail.module.css";

const CardDetail = (props) => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerText}>
        <h1 className={a.TitleMain}>{props.title}</h1>
        <h3 className={a.Title}>DIETS:</h3>
        <p className={a.Subtitle}>{props.diets}</p>
        <h3 className={a.Title}>HEALTH SCORE:</h3>
        <p className={a.Subtitle}>{props.healthScore}</p>
        <h3 className={a.Title}>SUMMARY:</h3>
        <p className={a.Subtitle}>{props.summary}</p>
        <h3 className={a.Title}>STEP TO STEP:</h3>
        <ul>
          <li className={a.List}>{props.steps}</li>
        </ul>
        <img className={a.Image} src={props.image} alt="NOT FOUND"></img>
      </div>
    </div>
  );
};

export default CardDetail;
