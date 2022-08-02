import {
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_NAME,
  GET_RECIPE_ID,
  FILTER_BY_DIETS,
  FILTERS,
  CLEAR,
  CREATE_FOR_ME,
} from "../actions";

const initialState = {
  diets: [],
  recipes: [],
  recipe: [],
  recipesCopy: [],
  recipesCopy2: [],
  delete: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesCopy: action.payload,
        recipesCopy2: action.payload,
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
    case CREATE_FOR_ME:
      const arrF = state.recipesCopy;
      let createForMe = arrF.filter((a) => a.id.length > 20);
      let createForApi = arrF.filter((a) => a.id > 20);
      let array =
        action.payload === "all"
          ? arrF 
          : createForMe.length === 0 
          ? alert("No existe")
          : !createForMe[0]
          ? arrF
          : action.payload === "api"
          ? createForApi
          : action.payload === "create"
          ? createForMe
          : arrF;
      return {
        ...state,
        recipes: array,
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
    case FILTERS:
      const all = state.recipesCopy;
      const alll = state.recipesCopy2;
      let arr =
        action.payload === "all"
          ? alll
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
          : action.payload === "lower"
          ? all.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : action.payload === "higher"
          ? all.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            })
          : null;
      return {
        ...state,
        recipes: arr,
      };
    case CLEAR:
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
