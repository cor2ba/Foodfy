import { Route } from "react-router-dom";
import Landing from "./component/Landing/landing";
import NavBar from "./component/NavBar/nav";
import RecipeCreator from "./component/RecipeCreator/recipeCreator";
import Recipes from "./component/Recipes/recipes";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={NavBar} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipeCreator" component={RecipeCreator} />
    </div>
  );
}

export default App;
