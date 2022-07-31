import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteBack } from "../../redux/actions";
import a from "./recipesCard.module.css";

const RecipesCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(deleteBack(props.id));
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
      <Link className={a.Link} to={`/${props.id}`}>
        <button className={a.Details}>DETAILS</button>
      </Link>
      {props.id.length > 20 ? (
        <button className={a.Details} onClick={() => handleClick()}>
          DELETE
        </button>
      ) : null}
    </div>
  );
};

export default RecipesCard;
