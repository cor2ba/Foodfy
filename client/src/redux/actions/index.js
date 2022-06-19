export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_ALPHABETIC = "FILTER_ALPHABETIC";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_HEALTH_SCORE = "ORDER_HEALTH_SCORE";
const axios = require("axios");

export const getAllRecipes = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/recipes");
  const payload = await response.data;
  return dispatch({ type: GET_ALL_RECIPES, payload });
};
export const getRecipeName = (name) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/recipe?name=${name}`);
  const payload = await response.data;
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
  const response = await axios.get("http://localhost:3001/diets");
  const payload = await response.data;
  return dispatch({ type: GET_DIETS, payload });
};

export const getRecipesId = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/recipe/${id}`);
  const payload = await response.data;
  return dispatch({ type: GET_RECIPE_ID, payload });
};

export const filterByDiets = (payload) => {
  return {
    type: FILTER_BY_DIETS,
    payload,
  };
};

export const filterAlphebetic = (payload) => {
  return {
    type: FILTER_ALPHABETIC,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderHealthScore = (payload) => {
  console.log(payload);
  return {
    type: ORDER_HEALTH_SCORE,
    payload,
  };
};
