import React from "react";
import a from "./selectAlphabeticalOrder.module.css";

const SelectAlphabeticalOrder = () => {
  return (
    <div>
      <select className={a.AlphabeticOrder}>
        <option>ANY ALPHABETICAL ORDER...</option>
        <option>ASCENDANCY</option>
        <option>DESCENDANT</option>
      </select>
    </div>
  );
};

export default SelectAlphabeticalOrder;
