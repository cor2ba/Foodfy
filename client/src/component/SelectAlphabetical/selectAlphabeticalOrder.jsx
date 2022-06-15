import React from "react";
import a from "./selectAlphabeticalOrder.module.css";
// import { useDispatch, useSelector } from "react-redux";

const SelectAlphabeticalOrder = () => {
  // const recipes = useSelector((state) => state.recipes);
  // const dispatch = useDispatch();
  // console.log(recipes);
  // const handleAscendancy = () => {
  //   const a = recipes.map((r) =>
  //     r.title.sort(function (a, b) {
  //       return a + b;
  //     })
  //   );
  //   dispatch(a);
  // };
  // const handleDescendant = () => {
  //   const d = recipes.map((r) =>
  //     r.title.sort(function (a, b) {
  //       return a - b;
  //     })
  //   );
  //   dispatch(d);
  // };

  return (
    <div>
      <select className={a.AlphabeticOrder}>
        <option>ANY ALPHABETICAL ORDER...</option>
        <option>ASCENDANCY</option>
        <option>DESCENDANT</option>
      </select>
    </div>
  );
};

export default SelectAlphabeticalOrder;
