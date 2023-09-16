
// import { products } from "../../data/product";

const Sous = () => {
  // const product = products.filter((el) => el.category === "Соусы");
  return (
    <section className="category">
      <div className="container">
        <div className="category__title">
          <h1 className="category__title">Соусы</h1>
          <button>
            <img src="/filter.png" alt="filter" />
          </button>
        </div>
        {/* <div className="cards">
          {product.map((el) => (
            <div key={el.id} className="card">
              <div className="card__img">
                <img src={el.image} alt="image" />
              </div>
              <div className="card__title">
                <h5>{el.name}</h5>
                <p>{el.description}</p>

                <div className="card__desc">
                  <button>Выбрать</button>
                  <h6>от {el.price} ₽</h6>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Sous;