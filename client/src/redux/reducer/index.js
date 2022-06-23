import {
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_NAME,
  GET_RECIPE_ID,
  FILTER_BY_DIETS,
  ORDER_BY_NAME,
  ORDER_HEALTH_SCORE,
  DELETE,
} from "../actions";

const initialState = {
  diets: [],
  recipes: [],
  recipe: [],
  recipesCopy: [],
  delete: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesCopy: action.payload,
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
          : allRecipes.filter((e) => {
              return e.diets?.find((i) => {
                return i.diets.includes(action.payload);
              });
            });
      return {
        ...state,
        recipes: dietsFiltered,
      };
    case ORDER_BY_NAME:
      const all = state.recipesCopy;
      let sortedArr =
        action.payload === "ALL"
          ? all
          : action.payload === "asd"
          ? all.sort((a, b) => {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : action.payload === "des"
          ? all.sort((a, b) => {
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            })
          : "";
      return {
        ...state,
        recipes: sortedArr,
      };
    case ORDER_HEALTH_SCORE:
      const allD = state.recipesCopy;
      let arr =
        action.payload === "ALL"
          ? allD
          : action.payload === "lower"
          ? allD.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : action.payload === "higher"
          ? allD.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            })
          : allD;
      return {
        ...state,
        recipes: arr,
      };
    case DELETE:
      let deleted = state.delete;
      return {
        ...state,
        recipe: deleted,
      };
    default:
      return initialState;
  }
};

export default rootReducer;
