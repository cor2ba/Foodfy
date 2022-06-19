import React, { useState } from "react";
import a from "./searchBar.module.css";
import { connect, useDispatch } from "react-redux";
import { getRecipeName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      alert("WE NEED A RECIPE NAME");
    } else {
      dispatch(getRecipeName(name));
    }
  };
  return (
    <div>
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

export const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export function mapDispatchToProps(dispatch) {
  return { getRecipeName: (name) => dispatch(getRecipeName(name)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
