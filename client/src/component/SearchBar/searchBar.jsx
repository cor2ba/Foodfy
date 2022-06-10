import React from "react";
import a from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input className={a.SeachRecipes} placeholder="SEARCH RECIPE..."></input>
      <button className={a.Sumbit} type="sumbit">
        SEND
      </button>
    </div>
  );
};

export default SearchBar;
