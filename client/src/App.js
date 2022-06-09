import { Route } from "react-router-dom";
import Landing from "./component/Landing/landing";
import Recipe from "./component/Recipe/recipe";
import RecipeCreator from "./component/RecipeCreator/recipeCreator";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Recipe} />
      <Route exact path="/recipeCreator" component={RecipeCreator} />
    </div>
  );
}

export default App;
