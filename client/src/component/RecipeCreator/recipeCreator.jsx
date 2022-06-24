import React, { useEffect, useState } from "react";
import a from "./recipeCreator.module.css";
import { Link, useHistory } from "react-router-dom";
import img from "../../imgs/backicon.png";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../../redux/actions";
import { Validations } from "./validations";

const RecipeCreator = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});
  const recipes = useSelector((state) => state.recipes);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    steps: [],
    image: "",
    diets: [],
  });

  const handleInputChange = (e) => {
    console.log(input);
    if (input.diets) {
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...new Set([...input.diets, e.target.value])],
    });
    setErrors(
      Validations({
        ...input,
        diets: [...new Set([...input.diets, e.target.value])],
      })
    );
  };

  // const deleteDiet = (d) => {
  //   setInput({
  //     ...input,
  //     Diets: input.diets.filter(
  //       (diets) => diets.toLowerCase() !== d.toLowerCase()
  //     ),
  //   });
  //   console.log(input.diets);
  // };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const exist = recipes.every(
    (r) => r.title.toUpperCase() !== input.title.toUpperCase()
  );

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (input.image === "") {
      input.image =
        "https://imgs.search.brave.com/_KPvrLWa9wT9dTKgNV9dQwk7IWkdnjWzC-Cv7cyJRo0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/aGVhbHRobndlbGwu/Y29tL2hlYWx0aG53/ZWxsL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA0LzhiZWYx/OTY1LTI0MDQtNDky/OS1hYjI5LTFmZGIx/ZWIzYjY5Zi5qcGc";
    }
    if (!exist) {
      return alert("NAME ALREADY EXIST");
    } else if (Object.keys(errors).length) {
      return alert(Object.values(errors));
    } else {
      console.log(input.steps);
      dispatch(createRecipe(input));
      alert("¡RECIPE CREATED!");
      setInput({
        title: "",
        summary: "",
        healthScore: 0,
        steps: [],
        image: "",
        diets: [],
      });
      history.push("/home");
    }
  };
  var num = 1;
  return (
    <div className={a.Parent}>
      <div className={a.Countainer}>
        <h1 className={a.Title}>WELCOME TO RECIPE CREATOR</h1>
        <form
          key={Diets.id}
          autoComplete="off"
          className={a.Form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className={a.Subtitle}>TITLE OF THE RECIPE :</label>
          <input
            type="text"
            className={a.InputCreate}
            placeholder="TITLE..."
            name="title"
            input={input.title}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
          {errors.title && <h1 className={a.titleErrors}>{errors.title}</h1>}
          <label className={a.Subtitle}>MAKE A SUMMARY OF THE RECIPE :</label>
          <input
            type="text"
            className={a.InputCreate}
            placeholder="SUMMARY..."
            name="summary"
            input={input.summary}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
          {errors.summary && (
            <h1 className={a.titleErrors}>{errors.summary}</h1>
          )}
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
            required
          ></input>
          {errors.steps && <h1 className={a.titleErrors}>{errors.steps}</h1>}
          <label className={a.Subtitle}>CHOOSE A CUSTOMER HEALTH SCORE :</label>
          <input
            type="number"
            placeholder="HEALTH SCORE..."
            className={a.InputCreate}
            name="healthScore"
            input={input.healthScore}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
          {errors.healthScore && (
            <h1 className={a.titleErrors}>{errors.healthScore}</h1>
          )}
          <label className={a.Subtitle}>CHOOSE A IMAGE :</label>
          <input
            type="text"
            placeholder="IMAGE..."
            className={a.InputCreate}
            name="image"
            input={input.image}
            onChange={(e) => handleInputChange(e)}
          ></input>
          {errors.image && <h1 className={a.titleErrors}>{errors.image}</h1>}
          <label className={a.Subtitle}>
            CHOOSE WHAT TYPE OF DIET USE YOUR RECIPE :
          </label>
          <select className={a.Select} onChange={(e) => handleSelect(e)}>
            {Diets.map((d) => (
              <option key={d.id} value={d.diets}>
                {d.diets.toUpperCase()}
              </option>
            ))}
          </select>
          {errors.diets && <h1 className={a.titleErrors}>{errors.diets}</h1>}
          <ul>
            <li className={a.List}>
              {input.diets?.map((d) => (
                <p>
                  DIET {num++}:{`${d.toUpperCase()}`}
                  {/* <button onClick={() => deleteDiet(d)}>X</button> */}
                </p>
              ))}
            </li>
          </ul>
          <button className={a.Submit} type="submit">
            SEND
          </button>
          <Link to="/home">
            <img className={a.Img} src={img} alt="Not Found"></img>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreator;
