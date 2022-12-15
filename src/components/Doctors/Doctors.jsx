import React from "react";
import c from "./Doctors.module.css";

let input = React.createRef();
let clearInput = () => {
  input.current.value = "";
};

const Doctors = () => {
  return (
    <div className={c.doctors}>
      <div className={c.searchWrapper}>
        <h1 className={c.header}>Врачи</h1>
        <div className="search">
          <input
            onClick={clearInput}
            ref={input}
            type="text"
            className={c.searchBox}
            placeholder="Имя специалиста или направление"
          ></input>
          <button className={c.searchButton}>Найти</button>
        </div>
      </div>

      <div className={c.doctors_list}>
        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/25c/328_350_2/25c46c0a3ef1d3993a0fe9104625877a.jpg"
              alt=""
            />
          </div>
          <h4>Пупкин Иван Иванович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 38 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> спортивный масаж,
            лечебный массаж, детский массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>

        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/a93/328_350_2/a93dfbe7590eb5994fec69fc55923f27.jpg"
              alt=""
            />
          </div>
          <h4>Васильева Василиса Васильевна</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> косметолог
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 10 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> эстетический массаж,
            лифтинг, лазерное лечение, фотоомоложение, ультразвуковая чистка
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>

        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/654/328_350_2/654ecc63498b775ea095e3f9f8640cb8.jpg"
              alt=""
            />
          </div>
          <h4>Сидоров Петр Петрович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 8 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> общий массаж,
            антицелюлитный массаж, точечный массаж, баночный массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>

        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/25c/328_350_2/25c46c0a3ef1d3993a0fe9104625877a.jpg"
              alt=""
            />
          </div>
          <h4>Пупкин Иван Иванович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 38 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> спортивный масаж,
            лечебный массаж, детский массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>

        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/a93/328_350_2/a93dfbe7590eb5994fec69fc55923f27.jpg"
              alt=""
            />
          </div>
          <h4>Васильева Василиса Васильевна</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> косметолог
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 10 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> эстетический массаж,
            лифтинг, лазерное лечение, фотоомоложение, ультразвуковая чистка
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>

        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/654/328_350_2/654ecc63498b775ea095e3f9f8640cb8.jpg"
              alt=""
            />
          </div>
          <h4>Сидоров Петр Петрович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 8 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> общий массаж,
            антицелюлитный массаж, точечный массаж, баночный массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>
        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/654/328_350_2/654ecc63498b775ea095e3f9f8640cb8.jpg"
              alt=""
            />
          </div>
          <h4>Сидоров Петр Петрович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 8 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> общий массаж,
            антицелюлитный массаж, точечный массаж, баночный массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>
        <div className={c.doctor}>
          <div className={c.doctor_img}>
            <img
              src="https://medsi.ru/upload/resize_cache/iblock/654/328_350_2/654ecc63498b775ea095e3f9f8640cb8.jpg"
              alt=""
            />
          </div>
          <h4>Сидоров Петр Петрович</h4>
          <p>
            <span className={c.boldText}>Специальность:</span> массажиcт
          </p>
          <p>
            <span className={c.boldText}>Стаж работы:</span> 8 лет
          </p>
          <p>
            <span className={c.boldText}>Услуги:</span> общий массаж,
            антицелюлитный массаж, точечный массаж, баночный массаж
          </p>
          <a href="tel:+79162869949">
            <button className={c.docButton}>Записаться на прием</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Doctors;
