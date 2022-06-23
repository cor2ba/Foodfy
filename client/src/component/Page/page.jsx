import React from "react";
import a from "./page.module.css";

export default function Page({
  recipesPerPage,
  recipes,
  page,
  nextHandler,
  prevHandler,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className={a.Nav}>
      <button className={a.Button} onClick={() => prevHandler()}>
        PREVIUS
      </button>

      <ul className={a.List}>
        {pageNumber &&
          pageNumber.map((number) => (
            <li
              className={a.ListChildrens}
              key={number}
              onClick={() => page(number)}
            >
              {number}
            </li>
          ))}
      </ul>
      <button className={a.Button} onClick={() => nextHandler()}>
        NEXT
      </button>
    </nav>
  );
}
