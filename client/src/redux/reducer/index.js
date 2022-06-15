import {
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_NAME,
  GET_RECIPE_ID,
  CREATE_RECIPE,
  FILTER_BY_DIETS,
  ORDER_BY_NAME,
} from "../actions";

const initialState = {
  diets: [],
  recipes: [],
  creates: {},
  recipe: [],
  recipesCopy: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesCopy: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        creates: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case GET_RECIPE_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipe: action.payload,
      };
    case FILTER_BY_DIETS:
      const allRecipes = state.recipesCopy;
      const dietsFiltered =
        action.payload === "ALL"
          ? allRecipes
          : allRecipes.filter((a) => a.diets === action.payload);
      return {
        ...state,
        recipes: dietsFiltered,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "asd"
          ? state.recipes.sort((a, b) => {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArr,
      };
    default:
      return initialState;
  }
};

export default rootReducer;
