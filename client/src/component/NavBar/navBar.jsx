import React from "react";
import ButtonForHome from "../ButtonForHome/buttonForHome";
import SearchBar from "../SearchBar/searchBar";
import ButtonForCreator from "../ButtonForCreator/buttonForCreator";
import SelectDiet from "../SelectDiet/selectDiet";

const NavBar = () => {
  return (
    <div>
      <ButtonForHome />
      <SearchBar />
      <SelectDiet />
      <ButtonForCreator />
    </div>
  );
};

export default NavBar;
