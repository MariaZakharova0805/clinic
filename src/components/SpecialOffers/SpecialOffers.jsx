import React from "react";
import c from "./SpecialOffers.module.css";

const SpecialOffers = () => {
  return (
    <div className={c.SpecialOffers}>
      <h1>Акции</h1>
      <div className={c.offers}>
        <div className={c.item}>
          <div>
            <h2>Первое посещение</h2>
            <p>Скидка на первое посещение любой услуги 10%</p>
            <a href="tel:+79162869949">
              <button className={c.button}>Получить скидку</button>
            </a>
          </div>
          <img
            src="https://img.icons8.com/dotty/512/medal2.png"
            alt=""
            className={c.image}
          />
        </div>

        <div className={c.item}>
          <div>
            <h2>Процедура в подарок</h2>
            <p>При покупке 10 процедур прессотерапии, 11 - в подарок!</p>
            <a href="tel:+79162869949">
              <button className={c.button}>Получить скидку</button>
            </a>
          </div>
          <img
            src="https://img.icons8.com/dotty/512/give-gift.png"
            alt=""
            className={c.image}
          />
        </div>

        <div className={c.item}>
          <div>
            <h2>Абонемент</h2>
            <p>
              Покупая абнемент на аппарате Лазерного Лполиза KIM8, вы получаете
              5% скидку на кажду процедуру
            </p>
            <a href="tel:+79162869949">
              <button className={c.button}>Получить скидку</button>
            </a>
          </div>
          <img
            src="https://img.icons8.com/dotty/512/test-partial-passed.png"
            alt=""
            className={c.image}
          />
        </div>

        <div className={c.item}>
          <div>
            <h2>Подарок от косметолога</h2>
            <p>При чистке лица на косметике Holy Land, вы получаете массаж лица в подарок</p>
            <a href="tel:+79162869949">
              <button className={c.button}>Получить скидку</button>
            </a>
          </div>
          <img
            src="https://img.icons8.com/dotty/512/aroma.png"
            alt=""
            className={c.image}
          />
        </div>

      </div>
    </div>
  );
};

export default SpecialOffers;
