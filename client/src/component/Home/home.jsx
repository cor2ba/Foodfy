import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiets,
  getAllRecipes,
  filters,
  filterByDiets,
  createForMe,
} from "../../redux/actions";
import a from "./home.module.css";
import RecipesCard from "../RecipesCard/recipesCard";
import ButtonForHome from "../ButtonForHome/buttonForHome";
import ButtonForCreator from "../ButtonForCreator/buttonForCreator";
import Loading from "../Loading/loading";
import Page from "../Page/page";
import SearchBar from "../SearchBar/searchBar";

const Home = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipes, indexOfLastRecipes);
  const [, setOrden] = useState(1);
  let index = Math.ceil(recipes.length / recipesPerPage);

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextHandler = () => {
    if (currentPage >= index) return;
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const prevHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  const firstHandler = () => {
    setCurrentPage(1);
  };

  const lastHandler = () => {
    setCurrentPage(index);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filters(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordened ${e.target.value}`);
  };

  const handleFilterDiets = (e) => {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordened ${e.target.value}`);
  };

  const createsForMe = (e) => {
    e.preventDefault();
    dispatch(createForMe(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordened ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);

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
            <select
              onChange={(e) => handleFilterDiets(e)}
              className={a.DietOrderSelect}
            >
              <option className={a.Option} value="ALL">
                ALL DIETS
              </option>
              {diets.map((d) => (
                <option key={d.id} value={d.diets.toLowerCase()}>
                  {d.diets.toUpperCase()}
                </option>
              ))}
            </select>
            <h1 className={a.NumPage}>{currentPage}</h1>
            <div>
              <select
                className={a.HealthOrderSelect}
                onChange={(e) => createsForMe(e)}
              >
                <option value="all">CREATES OR API</option>
                <option value="create">CREATE</option>
                <option value="api">API</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => handleFilter(e)}
                className={a.HealthOrderSelect}
              >
                <option value="all">FILTERS</option>
                <option value="asd">A-Z</option>
                <option value="des">Z-A</option>
                <option value="higher">HEALTH SCORE HIGHER</option>
                <option value="lower">HEALTH SCORE LOWER</option>
              </select>
            </div>
            <ButtonForCreator />
          </div>
          <div className={a.Page}>
            <Page
              recipesPerPage={recipesPerPage}
              recipes={recipes.length}
              page={page}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              firstHandler={firstHandler}
              lastHandler={lastHandler}
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
