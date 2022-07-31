import React from "react";
import a from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={a.Parent}>
      <div className={a.Countainer}>
        <h1 className={a.Title}>FOODFY</h1>
        <h3 className={a.Subtitle}> ❤ COOKING WITH LOVE FEEDS THE SOUL ❤</h3>
        <Link to="/home">
          <button className={a.Button}>ACCESS</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
