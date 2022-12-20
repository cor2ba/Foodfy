export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_ALPHABETIC = "FILTER_ALPHABETIC";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTERS = "FILTERS";
export const DELETE_BACK = "DELETE_BACK";
export const CREATE_FOR_ME = "CREATE_FOR_ME";
export const CLEAR = "CLEAR";
const axios = require("axios");

export const getAllRecipes = () => async dispatch => {
  const response = await axios.get(
    "/recipes"
  );
  const payload = await response.data;
  return dispatch({ type: GET_ALL_RECIPES, payload });
};

export const getRecipeName = name => async dispatch => {
  const response = await axios.get(
    `/recipe?name=${name}`
  );
  const payload = await response.data;
  return dispatch({ type: GET_RECIPE_NAME, payload });
};

// export const getRecipeName = (name) => (dispatch) => {
//   axios
//     .get(`http://localhost:3001/recipe?name=${name}`)
//     .then((response) => response.data)
//     .then((payload) => dispatch({ type: GET_RECIPE_NAME, payload }));
// };

export const createRecipe = obj => async dispatch => {
  try {
    const response = await axios.post(
      `/recipes`,
      obj
    );
    const payload = await response.data;
    return dispatch({ type: CREATE_RECIPE, payload });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getDiets = () => async dispatch => {
  const response = await axios.get("/diets");
  const payload = await response.data;
  return dispatch({ type: GET_DIETS, payload });
};

export const getRecipesId = id => async dispatch => {
  const response = await axios.get(
    `/recipe/${id}`
  );
  const payload = await response.data;
  return dispatch({ type: GET_RECIPE_ID, payload });
};

export const deleteBack = id => async dispatch => {
  const response = await axios.delete(
    `/recipe/${id}`
  );
  const payload = await response.data;
  return dispatch({ type: DELETE_BACK, payload });
};

export const filterByDiets = payload => {
  return {
    type: FILTER_BY_DIETS,
    payload,
  };
};

export const filterAlphebetic = payload => {
  return {
    type: FILTER_ALPHABETIC,
    payload,
  };
};

export const orderByName = payload => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const createForMe = payload => {
  return {
    type: CREATE_FOR_ME,
    payload,
  };
};

export const filters = payload => {
  console.log(payload);
  return {
    type: FILTERS,
    payload,
  };
};

export const clear = payload => {
  return {
    type: CLEAR,
    payload,
  };
};
