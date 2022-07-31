import React from "react";
import a from "./recipeCardDetail.module.css";

const CardDetail = (props) => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerText}>
        <h1 key={props.id} className={a.TitleMain}>
          {props.title.toUpperCase()}
        </h1>
        <img className={a.Image} src={props.image} alt="NOT FOUND"></img>
        <h3 className={a.Title}>SUMMARY:</h3>
        <p className={a.Subtitle}>{props.summary.toUpperCase()}</p>
        <h3 className={a.Title}>HEALTH SCORE:</h3>
        <p className={a.Subtitle}>{props.healthScore}</p>
        <h3 className={a.Title}>DIETS:</h3>
        <ul className={a.List}>
          {props.diets?.map((d) => {
            return <li>{d.diets.toUpperCase()}</li>;
          })}
        </ul>

        <h3 className={a.Title}>STEP TO STEP:</h3>
        <ul className={a.List}>
          {typeof props.steps === "string"
            ? props.steps.toUpperCase()
            : props.steps.map((s) => {
                return <li>{s.toUpperCase()}</li>;
              })}
        </ul>

      </div>
    </div>
  );
};

export default CardDetail;
