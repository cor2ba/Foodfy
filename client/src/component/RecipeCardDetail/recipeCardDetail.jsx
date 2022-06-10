import React from "react";

const CardDetail = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt="NOT FOUND"></img>
      <h3>DIETS:</h3>
      <ul>{props.diets.join(", ")}</ul>
      <h3>HEALTH SCORE:</h3>
      <p>{props.healthScore}</p>
      <h3>SUMMARY:</h3>
      <p>{props.summary}</p>
      <h3>STEP TO STEP:</h3>
      <ul>
        <li>{props.steps}</li>
      </ul>
    </div>
  );
};

export default CardDetail;
