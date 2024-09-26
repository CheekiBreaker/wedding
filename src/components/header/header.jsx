import logo from "/imgs/last.png";
import React from "react";
import "./header.style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <a to="/">
              <img src={logo} className="logoImg" alt="Логотип свадебного салона" /> Ласточка
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a to="/" className="header__a">
                  Главная
                </a>
              </li>
              <li className="header__item">
                <a to="/catalog" className="header__a">
                  Каталог
                </a>
              </li>
              <li className="header__item">
                <a to="/about" className="header__a">
                  О нас
                </a>
              </li>
              <li className="header__item">
                <a to="/contacts" className="header__a">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
