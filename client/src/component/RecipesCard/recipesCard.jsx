import React from "react";
import { Link, useHistory } from "react-router-dom";
import a from "./recipesCard.module.css";
import { useDispatch } from "react-redux";
import { deleteBack } from "../../redux/actions";

const RecipesCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteBackend = () => {
    dispatch(deleteBack(props.id));
    alert("RECIPE DELETED");
    history.push("/");
  };

  return (
    <div className={a.Countainer}>
      <img className={a.Img} src={props.image} alt="NOT FOUND"></img>
      <h1 className={a.Title}>{props.title.toUpperCase()}</h1>
      <h3 className={a.Subtitle}>HEALTH SCORE: %{props.healthScore}</h3>
      <h3 className={a.Subtitle}>DIETS:</h3>
      <ul key={props.id} className={a.List}>
        {props.diets?.map((d) => {
          return (
            <li key={d} className={a.Ul}>
              {d.toUpperCase()}
            </li>
          );
        })}
      </ul>
      <Link className={a.Link} to={`/recipes/${props.id}`}>
        <button className={a.Details}>DETAILS</button>
      </Link>
      {props.id.length > 20 ? (
        <button className={a.Details} onClick={(e) => deleteBackend(e)}>
          DELETE
        </button>
      ) : null}
    </div>
  );
};

export default RecipesCard;
