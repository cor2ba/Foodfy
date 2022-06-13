import React from "react";
import a from "./selectAlphabeticalOrder.module.css";
// import { useEffect, useDispatch } from "react";
// import { getAllRecipes } from "../../redux/actions";

const SelectAlphabeticalOrder = () => {
  // const dispatch = useDispatch();
  // const handleAscendancy = (e) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   dispatch(getAllRecipes());
  // }, []);

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
