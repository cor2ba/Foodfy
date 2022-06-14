import React, { useEffect } from "react";
import a from "./selectAlphabeticalOrder.module.css";
import { useSelector } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

const SelectAlphabeticalOrder = () => {
  // const recipes = useSelector((state) => state.recipes);
  // const dispatch = useDispatch();
  // const handleAscendancy = () => {
  //   recipes.sort(function (a, b) {
  //     return a.localeCompare(b);
  //   });
  // };
  // const handleDescendant = () => {
  //   recipes.title.sort(function (a, b) {
  //     return b.localeCompare(a);
  //   });
  // };

  // useEffect(() => {
  //   dispatch(getAllRecipes());
  // }, [dispatch]);
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
{
  /* <option onClick={(e) => handleAscendancy(e)}>ASCENDANCY</option>
        <option onClick={(e) => handleDescendant(e)}>DESCENDANT</option> */
}
