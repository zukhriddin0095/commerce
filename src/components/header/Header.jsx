import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.scss";
import { categories } from "../../data/category";


const Header = () => {
  
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Fragment>
      <header className="fixed">
        <div className="header__top">
          <div className="header__top__navbar container">
            <div className="header__top__navbar__aside">
              <h5>
                <span className="aside__title">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                Москва
              </h5>
              <h5>Проверить адрес</h5>
              <h5>
                Среднее время доставки*:<strong>00:24:19</strong>
              </h5>
            </div>
            <div className="navbar__select">
              <select >
                <option value="Ru">RU</option>
                <option value="UZ">UZ</option>
              </select>
            </div>
            <div className="header__top__navbar__bside">
              <h5>Время работы: с 11:00 до 23:00</h5>
              <Link>
                <span className="aside__title">
                  <i className="fa-regular fa-user"></i>
                </span>
                Войти в аккаунт
              </Link>
            </div>
          </div>
        </div>
        {/* header top */}
        <div className="header">
          <nav className="header__navbar container">
            <div className="header__navbar__aside">
              <img src="/pizza navbar.svg" alt="pizza" />
              <h5>Куда пицца</h5>
            </div>
            <div className={navbar ? "navbar active" : "navbar"}>
              {categories.map((el) => (
                <NavLink key={el.id}>{el.name}</NavLink>
              ))}
            </div>
            <div className="header__navbar__bside">
              <button className="header__navbar__bside__shopping">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>0 ₽</p>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
