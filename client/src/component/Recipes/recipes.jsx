import React, { useEffect, useState } from "react";
import RecipesCard from "../RecipesCard/recipesCard";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import a from "./recipes.module.css";
import NavBar from "../NavBar/navBar";
import Page from "../Page/page";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipes, indexOfLastRecipes);

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className={a.Countainer}>
      <div className={a.NavBar}>
        <NavBar />
      </div>

      <div className={a.Card}>
        {currentRecipes?.map((r) => {
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
        <Page
          recipesPerPage={recipesPerPage}
          recipes={recipes.length}
          page={page}
        />
      </div>
      <div className={a.Page}></div>
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
