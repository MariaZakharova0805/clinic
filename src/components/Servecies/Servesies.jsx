import React from "react";
import c from "./Servesies.module.css";

let input = React.createRef();
let clearInput = () => {
  input.current.value = "";
};


const Servesies = () => {
  return (
    <div className={c.servecies}>
      <div className={c.searchWrapper}>
        <h1 className={c.header}>Услуги</h1>
        <div className="search">
          <input
            onClick={clearInput}
            ref={input}
            type="text"
            className={c.searchBox}
            placeholder="Массаж, косметология, анализы..."
          ></input>
          <button className={c.searchButton}>Найти</button>
        </div>
      </div>

      <ul className={c.serveciesList}>
        <li><span>Косметология</span></li>
        <li><span>Аппартаная косметология</span></li>
        <li><span>Анализы</span></li>
        <li><span>Ручной массаж</span></li>
        <li><span>Аппаратный массаж</span></li>
        <li><span>Косметическая продукция</span></li>
      </ul>
    </div>
  );
};

export default Servesies;
