import React from "react";
import a from "./recipeCardDetail.module.css";

const CardDetail = (props) => {
  return (
    <div className={a.Countainer}>
      <div className={a.CountainerText}>
        <h1 key={props.id} className={a.TitleMain}>
          {props.title.toUpperCase()}
        </h1>
        <label className={a.Title}>SUMMARY:</label>
        <p className={a.Subtitle}>{props.summary.toUpperCase()}</p>
        <label className={a.Title}>STEP TO STEP:</label>
        <ul className={a.List}>
          {typeof props.steps === "string"
            ? props.steps.toUpperCase()
            : props.steps.map((s) => {
                return <li>{s.toUpperCase()}</li>;
              })}
        </ul>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label className={a.Title}>HEALTH SCORE:</label>
            <p className={a.Subtitle}>{props.healthScore}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label className={a.Title}>DIETS:</label>
            <ul className={a.List}>
              {props.diets?.map((d) => {
                return <li>{d.diets.toUpperCase()}</li>;
              })}
            </ul>
          </div>
        </div>
        <img className={a.Image} src={props.image} alt="NOT FOUND"></img>
      </div>
    </div>
  );
};

export default CardDetail;
