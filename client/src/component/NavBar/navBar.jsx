import React from "react";
import a from "./navBar.module.css";
import ButtonForHome from "../ButtonForHome/buttonForHome";
import SearchBar from "../SearchBar/searchBar";
import ButtonForCreator from "../ButtonForCreator/buttonForCreator";
import SelectDiet from "../SelectDiet/selectDiet";
import SelectAlphabeticalOrder from "../SelectAlphabetical/selectAlphabeticalOrder";

const NavBar = () => {
  return (
    <div className={a.CountainerNav}>
      <ButtonForHome />
      <SearchBar />
      <SelectDiet />
      <SelectAlphabeticalOrder />
      <ButtonForCreator />
    </div>
  );
};

export default NavBar;
