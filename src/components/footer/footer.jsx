import React from "react";
import "./footer.style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__col">
            <h3 className="footer__title">О нас</h3>
            <p className="footer__text">
              Мы предлагаем вам широкий выбор свадебных платьев и аксессуаров для вашего специального дня. Наш салон расположен в центре города, и мы рады приветствовать вас в любое время.
            </p>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Контакты</h3>
            <p className="footer__text">Адрес: </p>
            <p className="footer__text">Телефон: +7 (495) 123-45-67</p>
            <p className="footer__text">Email: info@wedding-saloon.ru</p>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Социальные сети</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Instagram</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Facebook</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Vkontakte</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2024 Wedding Saloon. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;