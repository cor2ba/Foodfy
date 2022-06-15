import React from "react";
import a from "./page.module.css";

export default function Page({ recipesPerPage, recipes, page }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className={a.Nav}>
      <ul className={a.List}>
        {pageNumber &&
          pageNumber.map((number) => (
            <li className={a.ListChildrens} key={number}>
              <a onClick={() => page(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
