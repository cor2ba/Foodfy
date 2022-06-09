import React, { useEffect } from "react";
import RecipesCard from "../RecipesCard/recipesCard";
import { getAllRecipes } from "../../redux/actions";
import { connect } from "react-redux";
import a from "./recipes.module.css";

const Recipes = (props) => {
  useEffect(() => {
    props.getAllRecipes();
  }, []);
  return (
    <div className={a.Countainer}>
      <h1>Recipes</h1>
      <div className={a.Card}>
        {props.recipes?.map((r) => {
          return (
            <RecipesCard
              key={r.id}
              id={r.id}
              title={r.title}
              diet={r.diets}
              img={r.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export function mapDispatchToProps(dispatch) {
  return { getAllRecipes: () => dispatch(getAllRecipes()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
