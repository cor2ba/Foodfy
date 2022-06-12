import React from "react";
import a from "./searchBar.module.css";
import { connect } from "react-redux";
import { getRecipeName } from "../../redux/actions";

const SearchBar = () => {
  return (
    <div>
      <input
        className={a.SeachRecipes}
        type="text"
        name="name"
        placeholder="SEARCH RECIPE..."
      ></input>
      <button className={a.Sumbit} type="sumbit">
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
