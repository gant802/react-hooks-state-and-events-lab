import React, { useState } from "react";

function Item({ name, category }) {
const [isOn, setIsOn] = useState(false);

function handleClick() {
  setIsOn(isOn => !isOn)
}

const appClass = isOn ? "in-cart" : ""
const buttonClass = isOn ? "remove" : "add"

  return (
    <li className={appClass} onClick={handleClick}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass}>{isOn ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
