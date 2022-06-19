import React from "react";
import a from "./recipeCardDetail.module.css";

const CardDetail = (props) => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerText}>
        <h1 className={a.TitleMain}>{props.title.toUpperCase()}</h1>
        <h3 className={a.Title}>DIETS:</h3>
        <ul>
          {props.diets?.map((d) => {
            return (
              <li key={d} className={a.List}>
                {d.diets.toUpperCase()}
              </li>
            );
          })}
        </ul>

        <h3 className={a.Title}>SUMMARY:</h3>
        <p className={a.Subtitle}>{props.summary.toUpperCase()}</p>
        <h3 className={a.Title}>STEP TO STEP:</h3>
        <ul className={a.List}>
          {typeof props.steps === "string"
            ? props.steps
            : props.steps.map((s) => {
                return (
                  <li key={s} className={a.List}>
                    {s.toUpperCase()}
                  </li>
                );
              })}
        </ul>
        <h3 className={a.Title}>HEALTH SCORE:</h3>
        <p className={a.Subtitle}>{props.healthScore}</p>
        <img className={a.Image} src={props.image} alt="NOT FOUND"></img>
      </div>
    </div>
  );
};

export default CardDetail;
