import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, filterByDiets } from "../../redux/actions";
import a from "./selectDiet.module.css";

const SelectDiet = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const handleFilterDiets = (e) => {
    dispatch(filterByDiets(e.target.value));
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      <select
        onChange={(e) => handleFilterDiets(e)}
        className={a.DietOrderSelect}
      >
        <option value="ALL">ALL DIETS</option>
        {diets.map((d) => (
          <option key={d.id} value={d.diets.toLowerCase()}>
            {d.diets.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDiet;
