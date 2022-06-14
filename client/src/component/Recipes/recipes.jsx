import React, { useEffect } from "react";
import RecipesCard from "../RecipesCard/recipesCard";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import a from "./recipes.module.css";
import NavBar from "../NavBar/navBar";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className={a.Countainer}>
      <div className={a.NavBar}>
        <NavBar />
      </div>
      <div className={a.Card}>
        {recipes?.map((r) => {
          return (
            <RecipesCard
              key={r.id}
              id={r.id}
              image={r.image}
              title={r.title}
              diets={r.diets.map((d) => d.diets)}
            />
          );
        })}
      </div>
    </div>
  );
};

// export const mapStateToProps = (state) => {
//   return {
//     recipes: state.recipes,
//   };
// };

// export function mapDispatchToProps(dispatch) {
//   return { getAllRecipes: () => dispatch(getAllRecipes()) };
// }

export default Recipes;
