import React from "react";
import { orderHealthScore } from "../../redux/actions";
import { useDispatch } from "react-redux";
import a from "./healthScoreOrder.module.css";

const HealthScoreOrder = () => {
  const dispatch = useDispatch();

  const handleHealthScore = (e) => {
    dispatch(orderHealthScore(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <select
        onChange={(e) => handleHealthScore(e)}
        className={a.HealthOrderSelect}
      >
        <option value="ALL">HEALTH SCORE ORDER</option>
        <option value="higher">HIGHER</option>
        <option value="lower">LOWER</option>
      </select>
    </div>
  );
};

export default HealthScoreOrder;
