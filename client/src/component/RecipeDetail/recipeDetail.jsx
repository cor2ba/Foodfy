import React, { useEffect } from "react";
import CardDetail from "../RecipeCardDetail/recipeCardDetail";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesId, clear } from "../../redux/actions";
import Loading from "../Loading/loading";
import a from "./recipeDetail.module.css";
import img from "../../imgs/backicon.png";

const RecipeDetail = () => {
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesId(id));
    return dispatch(clear());
  }, [dispatch, id]);

  if (recipe.length === 0) {
    return (
      <div className={a.Parent}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={a.Parent}>
        <div className={a.Countainer} key={recipe.id}>
          {recipe?.map((r) => {
            return (
              <CardDetail
                key={r.id}
                diets={r.diets}
                title={r.title}
                summary={r.summary}
                healthScore={r.healthScore}
                steps={r.steps}
                image={r.image}
              />
            );
          })}
          <Link to="/home">
            <img className={a.Image} src={img} alt="Not Found"></img>
          </Link>
        </div>
      </div>
    );
  }
};
export default RecipeDetail;
