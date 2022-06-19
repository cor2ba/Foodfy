import React from "react";
import a from "./loading.module.css";
import img from "../../imgs/zandia.gif";

const Loading = () => {
  return (
    <div className={a.Countainer}>
      <h1 className={a.Title}>LOADING...</h1>
      <img className={a.Img} src={img} alt="Not Found"></img>
    </div>
  );
};

export default Loading;
