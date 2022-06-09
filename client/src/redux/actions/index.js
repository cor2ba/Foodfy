export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";

export const getAllRecipes = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/recipes");
  const payload = await response.json();
  return dispatch({ type: GET_ALL_RECIPES, payload });
};

export const createRecipe = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/recipes");
  const payload = await response.json();
  return dispatch({ type: CREATE_RECIPE, payload });
};

export const getRecipeName = (name) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/recipes?name=${name}`);
  const payload = await response.json();
  return dispatch({ type: GET_RECIPE_NAME, payload });
};

export const getDiets = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/diets");
  const payload = await response.json();
  return dispatch({ type: GET_DIETS, payload });
};

export const getDietsId = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/${id}`);
  const payload = await response.json();
  return dispatch({ type: GET_RECIPE_ID, payload });
};
