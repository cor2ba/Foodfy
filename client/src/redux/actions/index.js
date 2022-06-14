export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
const axios = require("axios");

export const getAllRecipes = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/recipes");
  const payload = await response.json();
  return dispatch({ type: GET_ALL_RECIPES, payload });
};
export const getRecipeName = (name) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/recipe?name=${name}`);
  const payload = await response.json();
  return dispatch({ type: GET_RECIPE_NAME, payload });
};

export const createRecipe = (obj) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/recipes`, obj);
    const payload = await response.data;
    return dispatch({ type: CREATE_RECIPE, payload });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getDiets = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/diets");
  const payload = await response.json();
  return dispatch({ type: GET_DIETS, payload });
};

export const getDietsId = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/recipe/${id}`);
  const payload = await response.json();
  return dispatch({ type: GET_RECIPE_ID, payload });
};
