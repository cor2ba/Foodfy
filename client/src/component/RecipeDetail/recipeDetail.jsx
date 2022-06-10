import React, { useEffect } from "react";
import CardDetail from "../RecipeCardDetail/recipeCardDetail";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDietsId } from "../../redux/actions";

const RecipeDetail = () => {
  const recipe = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDietsId(id));
  }, []);
  return (
    <div>
      <Link to="/recipes">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4885/4885344.png"
          alt="Not Found"
        ></img>
      </Link>
      {recipe?.map((r) => {
        return (
          <CardDetail
            image={r.diets}
            summary={r.summary}
            healthScore={r.healthScore}
            steps={r.steps}
          />
        );
      })}
    </div>
  );
};
export default RecipeDetail;
