const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
const f = require('session-file-store');

function Basket({ cards }) {
  return (
    <Layout>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MAGIC: THE GATHERING</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Личный кабинет</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Главная страница</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Выход</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ textAlign: 'right', paddingTop: '10px' }}>
        <button className="btn btn-outline-success btn-basket-order" type="submit">Отправить заказ</button>
      </div>
      <h2 style={{ textAlign: 'center', paddingBottom: '20px' }}>Карточки в корзине</h2>
      {/* Тут надо вставить имя пользователя */}

      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingLeft: '100px' }}>
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Basket;
