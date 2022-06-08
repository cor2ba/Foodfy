import {
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_NAME,
  GET_RECIPE_ID,
  CREATE_RECIPE,
} from "../actions";

const State = {
  diets: [],
  recipes: [],
  recipe: {},
};

const rootReducer = (state = State, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case GET_RECIPE_NAME:
      return {
        ...state,
        recipe: action.payload,
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return State;
  }
};

export default rootReducer;
