import { Route } from "react-router-dom";
import Landing from "./component/Landing/landing";
import RecipeCreator from "./component/RecipeCreator/recipeCreator";
import Recipes from "./component/Recipes/recipes";
import RecipeDetail from "./component/RecipeDetail/recipeDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipes/:id" component={RecipeDetail} />
      <Route exact path="/recipeCreator" component={RecipeCreator} />
    </div>
  );
}

export default App;
