import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import a from "./selectDiet.module.css";

const SelectDiet = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <select className={a.DietOrderSelect}>
        {diets.map((d) => (
          <option value={d.diets}>{d.diets.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectDiet;
