const React = require('react');
const Layout = require('./Layout');

const Card = require('./basketCards');

function Basket({ arr }) {
  return (
    <Layout>
    <div className="basket-background">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MAGIC: THE GATHERING</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/personArea">Добавить карточку</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">Домой</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout" aria-disabled="true">Выход</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{
        textAlign: 'right', paddingTop: '10px', position: 'fixed', right: '35px',
      }}
      >
        <button className="btn btn-outline-success btn-basket-order" type="submit">Отправить заказ</button>
      </div>
      <h2 style={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '10px' }}>Карточки в корзине</h2>
      {/* Тут надо вставить имя пользователя */}

      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingLeft: '100px' }}>
          {arr.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}

module.exports = Basket;
