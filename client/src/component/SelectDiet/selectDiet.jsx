import React from "react";
import a from "./selectDiet.module.css";

const SelectDiet = () => {
  return (
    <div>
      <select className={a.DietOrderSelect}>
        <option>ALL DIETS...</option>
        <option>KETOGENIC</option>
        <option>VEGETARIAN</option>
        <option>LACTO VEGETARIAN</option>
        <option>OVO VEGETARIAN</option>
        <option>VEGAN</option>
        <option>PESCETARIAN</option>
        <option>PALEO</option>
        <option>PRIMAL</option>
        <option>LOW FODMAP</option>
        <option>WHOLE 30</option>
      </select>
    </div>
  );
};

export default SelectDiet;
