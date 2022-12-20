import { Route, Switch } from "react-router-dom";
import Landing from "./component/Landing/landing";
import RecipeCreator from "./component/RecipeCreator/recipeCreator";
import Home from "./component/Home/home";
import RecipeDetail from "./component/RecipeDetail/recipeDetail";
import Error404 from "./component/Error404/error404";
import axios from "axios";
import "./App.css";
axios.defaults.baseURL ="http://localhost:3001/"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={RecipeCreator} />
        <Route exact path="/:id" component={RecipeDetail} />
        <Route exact path="/" component={Landing} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
