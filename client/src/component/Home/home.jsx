import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiets,
  orderByName,
  getAllRecipes,
  orderHealthScore,
} from "../../redux/actions";
import a from "./home.module.css";
import RecipesCard from "../RecipesCard/recipesCard";
import ButtonForHome from "../ButtonForHome/buttonForHome";
import ButtonForCreator from "../ButtonForCreator/buttonForCreator";
import SearchBar from "../SearchBar/searchBar";
import SelectDiet from "../SelectDiet/selectDiet";
import Loading from "../Loading/loading";
import Page from "../Page/page";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipes, indexOfLastRecipes);
  const [, setOrden] = useState(1);

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordened ${e.target.value}`);
  };

  const handleHealthScore = (e) => {
    e.preventDefault();
    dispatch(orderHealthScore(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordened ${e.target.value}`);
  };

  if (!recipes.length) {
    return (
      <div className={a.Countainer}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={a.Countainer}>
        <div className={a.NavBar}>
          <div className={a.CountainerNav}>
            <ButtonForHome />
            <SearchBar />
            <SelectDiet />
            <select
              onChange={(e) => handleSort(e)}
              className={a.AlphabeticOrder}
            >
              <option value="ALL">ALPHABETICAL ORDER</option>
              <option value="asd">ASCENDANCY</option>
              <option value="des">DESCENDANT</option>
            </select>
            <div>
              <select
                onChange={(e) => handleHealthScore(e)}
                className={a.HealthOrderSelect}
              >
                <option value="ALL">HEALTH SCORE ORDER</option>
                <option value="higher">HIGHER</option>
                <option value="lower">LOWER</option>
              </select>
            </div>
            <ButtonForCreator />
          </div>
          <div className={a.Page}>
            <Page
              recipesPerPage={recipesPerPage}
              recipes={recipes.length}
              page={page}
            />
          </div>
        </div>
        <div className={a.Card}>
          {currentRecipes?.map((r) => {
            return (
              <RecipesCard
                key={r.id}
                id={r.id}
                healthScore={r.healthScore}
                image={r.image}
                title={r.title}
                diets={r.diets.map((d) => d.diets)}
              />
            );
          })}
        </div>
      </div>
    );
  }
};
export default Home;
