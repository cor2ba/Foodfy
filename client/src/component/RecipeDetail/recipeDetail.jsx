import React, { useEffect } from "react";
import CardDetail from "../RecipeCardDetail/recipeCardDetail";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesId, deleted, deleteBack } from "../../redux/actions";
import Loading from "../Loading/loading";
import a from "./recipeDetail.module.css";
import img from "../../imgs/backicon.png";

const RecipeDetail = () => {
  const recipe = useSelector((state) => state.recipe);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDelete = () => {
    dispatch(deleteBack(id));
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getRecipesId(id));
    return dispatch(deleted());
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
          {id.length > 20 ? (
            <button className={a.Button} onClick={() => handleDelete()}>
              DELETE RECIPE
            </button>
          ) : null}
          <Link to="/home">
            <img className={a.Image} src={img} alt="Not Found"></img>
          </Link>
        </div>
      </div>
    );
  }
};
export default RecipeDetail;
