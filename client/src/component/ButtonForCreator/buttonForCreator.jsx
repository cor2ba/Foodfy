import React from "react";
import a from "./buttonForCreator.module.css";
import { Link } from "react-router-dom";

const ButtonForCreator = () => {
  return (
    <div>
      <Link to="/form">
        <button className={a.ButtonCreator}>
          CREATE RECIPE
        </button>
      </Link>
    </div>
  );
};

export default ButtonForCreator;
