import React from "react";
import c from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.footer_content}>
        {/* Телефон */}
        <div className={c.footer_item}>
          <h3 className={c.footer_item_header}>Телефон</h3>
          <a href="tel:+79162869949" className={c.footer_item_text}>
            <p>+7 (915) 286-99-49</p>
          </a>
        </div>

        {/* социальные сети */}
        <div className={c.footer_item}>
          <h3 className={c.footer_item_header}>Социальные сети</h3>
          <a
            href="https://wa.me/79162869949"
            target="_blank"
            alt="phone_call"
            className={c.footer_item_text}
          >
            <img
              src="https://img.icons8.com/ios/154/whatsapp--v1.png"
              className={c.icon}
              alt="whatsapp"
            />
          </a>
          <a href="https://t.me/Maria_Zakharova_V" target="_blank">
            <img
              src="https://img.icons8.com/ios/512/telegram-app.png"
              className={c.icon}
              alt="telegramm"
            />
          </a>
          <a href="mailto:fraumaria2011@yandex.ru">
            <img
              src="https://img.icons8.com/ios/512/secured-letter.png"
              className={c.icon}
              alt="email"
            />
          </a>
          <a href="https://t.me/Maria_Zakharova_V" target="_blank">
            <img
              src="https://img.icons8.com/ios/512/viber.png"
              className={c.icon}
              alt="viber"
            />
          </a>
        </div>
        {/* адрес */}
        <div className={c.footer_item}>
          <h3 className={c.footer_item_header}>Адрес</h3>
          <a
            href="https://yandex.ru/maps/-/CCUn54Uc2C"
            target="_blank"
            className={c.footer_item_text}
          >
            <p>г.Красногорск, Подмосковный бульвар д.6</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
