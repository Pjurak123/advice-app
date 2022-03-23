import React, { useState, useEffect } from "react";
import divider from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

function Random() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const items = await data.json();
    setItems(items.slip);
  };
  console.log(items);
  return (
    <div>
      <p className="advice-id">advice #{items.id}</p>
      <h2 className="advice-text">"{items.advice}"</h2>
      <img src={divider} alt="divider" className="divider" />
      <div className="circle-container">
        <button onClick={fetchItems} className="circle"></button>
        <div className="dice-container">
          <img src={dice} alt="dice" className="dice" />
        </div>
      </div>
    </div>
  );
}

export default Random;
