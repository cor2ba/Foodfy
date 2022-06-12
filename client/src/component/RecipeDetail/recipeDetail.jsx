import React, { useEffect } from "react";
import CardDetail from "../RecipeCardDetail/recipeCardDetail";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDietsId } from "../../redux/actions";
import a from "./recipeDetail.module.css";

const RecipeDetail = () => {
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDietsId(id));
  }, [dispatch, id]);

  return (
    <div className={a.Parent}>
      <Link to="/recipes">
        <img
          className={a.Image}
          src="https://cdn-icons-png.flaticon.com/128/4885/4885344.png"
          alt="Not Found"
        ></img>
      </Link>
      <div className={a.Countainer}>
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
      </div>
    </div>
  );
};
export default RecipeDetail;
