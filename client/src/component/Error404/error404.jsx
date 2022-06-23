import React from "react";
import { Link } from "react-router-dom";
import img from "../../imgs/error404.png";
import a from "./error404.module.css";

const Error404 = () => {
  return (
    <div className={a.Countainer}>
      <div className={a.Children}>
        <img className={a.img} src={img} alt="Not Found"></img>
        <h1 className={a.TitleMain}>THIS PAGE DOESN´T EXIST</h1>
      </div>
      <Link className={a.Link} to="/home">
        <h1 className={a.Title}>GO TO HOME</h1>
      </Link>
      <Link className={a.Link} to="/">
        <h1 className={a.Title}>GO TO LANDING</h1>
      </Link>
      <Link className={a.Link} to="/form">
        <h1 className={a.Title}>GO TO FORM</h1>
      </Link>
    </div>
  );
};

export default Error404;
