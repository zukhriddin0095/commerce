import { NavLink } from "react-router-dom";

import "./hero.scss";
import { categories } from "../../data/category";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <ul className="hero__list">
          <li className="hero__list__item">
            <img src="/nav-link (7).svg" alt="logoli" />
            <NavLink>Акции</NavLink>
          </li>
          {categories.map((el, i) => (
            <li key={i} className="hero__list__item">
              <img src={el.image} alt="logoli" />
              <NavLink>{el.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="inform">
          <div className="inform__img">
            <img src="/inform (1).png" alt="pizza" />
            <p>3 средние пиццы от 999 рублей</p>
          </div>

          <div className="inform__img">
            <img src="/inform (2).png" alt="pizza" />
            <p>Кэшбек 10% на самовывоз (доставка)</p>
          </div>

          <div className="inform__img">
            <img src="/inform (1).png" alt="pizza" />
            <p>3 средние пиццы от 999 рублей</p>
          </div>

          <div className="inform__img">
            <img src="/inform (2).png" alt="pizza" />
            <p>Кэшбек 10% на самовывоз (доставка)</p>
          </div>
        </div>
        <div className="location">
          <h5>Проверить адрес доставки</h5>
          <input type="text" placeholder="Адрес . . ." />
          <button>Проверить</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
