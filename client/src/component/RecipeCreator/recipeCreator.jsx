import React, { useEffect, useState } from "react";
import a from "./recipeCreator.module.css";
import { Link, useHistory } from "react-router-dom";
import img from "../../imgs/backicon.png";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../../redux/actions";

const RecipeCreator = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diet: [],
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diet: [...input.diet, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(createRecipe(input));
    alert("¡RECIPE CREATED!");
    setInput({
      title: "",
      summary: "",
      healthScore: "",
      steps: "",
      image: "",
      diet: [],
    });
    history.push("/recipes");
  };

  return (
    <div className={a.Parent}>
      <div className={a.Countainer}>
        <h1 className={a.Title}>WELCOME TO RECIPE CREATOR</h1>
        <form className={a.Form} onSubmit={(e) => handleSubmit(e)}>
          <label className={a.Subtitle}>TITLE OF THE RECIPE :</label>
          <input
            type="text"
            className={a.InputCreate}
            placeholder="TITLE..."
            name="title"
            input={input.title}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <label className={a.Subtitle}>MAKE A SUMMARY OF THE RECIPE :</label>
          <input
            type="text"
            className={a.InputCreate}
            placeholder="SUMMARY..."
            name="summary"
            input={input.summary}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <label className={a.Subtitle}>
            MAKE A STEP TO STEP OF THE RECIPE :
          </label>
          <input
            type="text"
            className={a.InputCreate}
            placeholder="STEP TO STEP..."
            name="steps"
            input={input.steps}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <label className={a.Subtitle}>CHOOSE A CUSTOMER HEALTH SCORE :</label>
          <input
            type="text"
            placeholder="HEALTH SCORE..."
            className={a.InputCreate}
            name="healthScore"
            input={input.healthScore}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <label className={a.Subtitle}>CHOOSE A IMAGE :</label>
          <input
            type="text"
            placeholder="IMAGE..."
            className={a.InputCreate}
            name="image"
            input={input.image}
            onChange={(e) => handleInputChange(e)}
          ></input>
          <label className={a.Subtitle}>
            CHOOSE WHAT TYPE OF DIET USE YOUR RECIPE :
          </label>
          <select className={a.Select} onChange={(e) => handleSelect(e)}>
            {diets.map((d) => (
              <option value={d.diets}>{d.diets.toUpperCase()}</option>
            ))}
          </select>
          <ul>
            <li className={a.List}>
              {input.diet.map((d) => d.toUpperCase() + " ,")}
            </li>
          </ul>
          <button className={a.Submit} type="submit">
            SEND
          </button>
          <Link to="/recipes">
            <img className={a.Img} src={img} alt="Not Found"></img>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreator;
