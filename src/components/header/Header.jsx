import { Fragment, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import  { LanguageContext } from "../../context/LanguageContext";

import "./header.scss";
import { categories } from "../../data/category";


const Header = () => {
  const { langType, lang, setLangType } = useContext(LanguageContext);
  console.log(lang);
  // console.log(langType);
  
  const changeLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem("language", e.target.value);
  };
  
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
                {lang.moscow}
              </h5>
              <h5>{lang.addres}</h5>
              <h5>
                {lang.time}<strong>00:24:19</strong>
              </h5>
            </div>
            <div className="navbar__select">
              <select value={langType} onChange={changeLang}>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
              </select>
            </div>
            <div className="header__top__navbar__bside">
              <h5>{lang.workingtime}</h5>
              <Link>
                <span className="aside__title">
                  <i className="fa-regular fa-user"></i>
                </span>
                {lang.account}
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
