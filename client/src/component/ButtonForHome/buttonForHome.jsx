import React from "react";
import { Link } from "react-router-dom";
import a from "./buttonForHome.module.css";

const ButtonForHome = () => {
  return (
    <div className={a.Countainer}>
      <Link className={a.Link} to="/">
        <h1 className={a.Title}>FOODFY</h1>
      </Link>
    </div>
  );
};

export default ButtonForHome;
