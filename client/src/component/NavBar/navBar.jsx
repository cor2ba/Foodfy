import React from "react";
import ButtonForHome from "../ButtonForHome/buttonForHome";
import SearchBar from "../SearchBar/searchBar";
import ButtonForCreator from "../ButtonForCreator/buttonForCreator";
import SelectDiet from "../SelectDiet/selectDiet";
import a from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={a.Container}>
      <ButtonForHome />
      <SearchBar />
      <SelectDiet />
      <ButtonForCreator />
    </div>
  );
};

export default NavBar;
