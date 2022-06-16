const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function PersonArea({ cards }) {
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
                <a className="nav-link active" aria-current="page" href="/">Домой</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Корзина</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Выход</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </nav>

      <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Привет, Вася!</h2>
      {/* Тут надо вставить имя пользователя */}

    </Layout>
  );
}

module.exports = PersonArea;
