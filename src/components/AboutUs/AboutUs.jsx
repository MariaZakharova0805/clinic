import React from "react";
import c from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={c.aboutUs}>
      <div className={c.header}>
        <div className={c.header_content}>
          <div className={c.header_text}>
            <h1>Клиника "Бьюти Клиника"</h1>
            <p>Все для Вашей красоты и здоровья</p>
            <p>Работаем с декабря 2022 года</p>
            <p>Более 1000 довольных клиентов</p>
            <p>50 квалифицированных специалистов различных направлений</p>
          </div>
          <img
            src="http://korea-med.com/wp-content/uploads/2017/04/zdanie-kliniki-inha.jpg"
            alt="здание клиники"
            className={c.header_img}
          />
        </div>
      </div>
      <div className={c.body}>
        <p className={c.body_Text}>
          Наши специалисты оказывают высококвалифицированную помощь и заботу о
          здоровье. Все кабинеты оснащены передовым оборудованием для
          лабораторной и инструментальной диагностики. Каждый пациент получает
          современное эффективное лечение и внимательный уход. "Бьюти Клиника" –
          это персонифицированная медицина и уход, которая предусматривает
          индивидуальный подход к каждому клиенту. В клинике "Бьюти Клиника"
          можно пройти комплексное обследование и лечение, получить качественное
          медицинское сопровождение от первого визита и до выздоровления.
        </p>
        <p>В нашей клинике для вас доступны следующие услуги:</p>
        <ul className={c.serveciesList}>
          <li>
            <span>Косметология</span>
          </li>
          <li>
            <span>Аппартаная косметология</span>
          </li>
          <li>
            <span>Анализы</span>
          </li>
          <li>
            <span>Ручной массаж</span>
          </li>
          <li>
            <span>Аппаратный массаж</span>
          </li>
          <li>
            <span>Косметическая продукция</span>
          </li>
        </ul>

        <h1 className={c.benefits_header}>Наши преимущества</h1>
        <div className={c.benefits}>
          <div className={c.benefits_item}>
            <img
              src="https://medsi.ru/upload/iblock/846/8460034f19b6c36ca584d1647c98105b.png"
              alt=""
            />
            <h4>Высокотехнологичное оборудование</h4>
            <p className={c.benefits_item_text}>
              В клинике проводится точная диагностика и лечение на современных
              аппаратах экспертного класса: аппарат Кавитон новго поколения,
              Аппарат вибрационного массажа Mychway G5, Аппарат радиолифтинга по
              телу и лицу Beauty Star, Косметологический аппарат Plasma Pen.
            </p>
            <p className={c.benefits_item_text}>
              Мы испольузем только качетсвенную косметику известных
              производителей, хорошо зарекомендовашвную себя на практике: Holy
              Land, Kora, Clinique, Cellcosmet, Egia, L'Occitane.
            </p>
          </div>

          <div className={c.benefits_item}>
            <img
              src="https://medsi.ru/upload/iblock/290/2905b946702af2490836e6f6d9dbdc87.png"
              alt=""
            />
            <h4>Ведущие специалисты</h4>
            <p className={c.benefits_item_text}>
              Консультирование, обследования, косметология, медицинский и
              косметологический массаж. Все процедуры проводят специалисты
              высокой квалификации.
            </p>
            <p className={c.benefits_item_text}>
              В клинки "Бьюти клинки" работают профессионалы, в том числе
              эксперты международного уровня и лидеры мнений в своем
              направлении.
            </p>
          </div>

          <div className={c.benefits_item}>
            <img
              src="https://medsi.ru/upload/iblock/580/580aa317e37df82441ccc6d98af137b7.png"
              alt=""
            />
            <h4>Комфортабельные кабинеты</h4>
            <p className={c.benefits_item_text}>
              Все наши кабинеты оснащенные всей необходимой мебелью и
              оборудованием. Мы сделали все для вашего здоровья, комфорта и
              отдыха.
            </p>
            <p className={c.benefits_item_text}>
              Предоставляется широкий спектр дополнительных услуг, которые
              сделают пребывание в нашей клинике максимально комфортным.
            </p>
          </div>
        </div>

        <div className={c.documents}>
          <h1>Сертификаты</h1>

          <div className={c.documents_list}>
            <img
              src="https://ogost.ru/wp-content/uploads/2021/09/iso-bolshoj.webp"
              alt="serificate"
            />
            <img
              src="https://ogost.ru/wp-content/uploads/2021/09/iso-bolshoj.webp"
              alt="serificate"
            />
            <img
              src="https://ogost.ru/wp-content/uploads/2021/09/iso-bolshoj.webp"
              alt="serificate"
            />
            <img
              src="https://ogost.ru/wp-content/uploads/2021/09/iso-bolshoj.webp"
              alt="serificate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
