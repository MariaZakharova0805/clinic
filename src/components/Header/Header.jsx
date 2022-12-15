import React from "react";
import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? c.activeLink : c.navItem);

const Header = () => {
  return (
    <div className={c.top}>
      <div className={c.mapAndPhones}>
        <a
          href="https://yandex.ru/maps/-/CCUn54Uc2C"
          target="_blank"
          className={c.navItem}
        >
          <img
            src="https://img.icons8.com/ios/512/marker.png"
            alt="map"
            className={c.icon}
          />
          <p>Посмотреть на карте</p>
        </a>
        <a href="tel:+79162869949" className={c.navItem}>
        <img
            src="https://img.icons8.com/ios/512/ringing-phone.png"
            alt="phone_call"
            className={c.icon}
          />
          <p>+7 (915) 286-99-49</p>
          
        </a>
      </div>
      <div className={c.topMenu}>
        <img
          className={c.logo}
          src="http://elatriym.com/wp-content/uploads/2011/11/%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8.jpg"
          alt="logo"
        />

        <div className={c.dropdown}>
          <div className={c.dropbtn}></div>
          <nav className={c.nav}>
            <NavLink to="/servesies" className={setActive}>
              <a>Услуги</a>
            </NavLink>
            <NavLink to="/specialists" className={setActive}>
              <a>Специалисты</a>
            </NavLink>
            <NavLink to="/specialOffers" className={setActive}>
              <a>Акции</a>
            </NavLink>
            <NavLink to="/aboutUs" className={setActive}>
              <a>О клинике</a>
            </NavLink>
          </nav>
        </div>
      </div>
      <hr className={c.greyLine}></hr>
    </div>
  );
};

export default Header;
