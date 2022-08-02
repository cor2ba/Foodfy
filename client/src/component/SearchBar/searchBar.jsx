import React, { useState } from "react";
import a from "./searchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const recipes = useSelector((state) => state.recipes);
  const filtered = recipes.every((r) => {
    return r.title.toLowerCase() !== name.toLowerCase();
  });

  const handleInputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      return alert("WE NEED A RECIPE NAME");
    } else if (filtered) {
      return alert("THE RECIPE DOESN´T EXIST");
    } else {
      dispatch(getRecipeName(name));
    }
  };

  return (
    <div className={a.Container}>
      <input
        className={a.InputRecipes}
        type="text"
        placeholder="SEARCH RECIPE..."
        onChange={(e) => handleInputName(e)}
      ></input>
      <button
        className={a.Sumbit}
        type="sumbit"
        onClick={(e) => handleSubmit(e)}
      >
        SEND
      </button>
    </div>
  );
};

export default SearchBar;
