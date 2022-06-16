const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
// const User = require('../db/models/user');

function Home({ cards, user }) {
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
                <a className="nav-link" aria-current="page" href="/personArea">Добавить карточку</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create/basket">Корзина</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout" aria-disabled="true">Выход</a>
              </li>
            </ul>
            <form className="d-flex fetch">
              <select name="selector" className="form-select" aria-label="Default select example">
                <option selected>Выберите город:</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Москва">Москва</option>
                <option value="Саратов">Саратов</option>
                <option value="Выборг">Выборг</option>
                <option value="Уфа">Уфа</option>
                <option value="Нижний Новгород">Нижний Новгород</option>
                <option value="Сочи">Сочи</option>
                <option value="Мурманск">Мурманск</option>
                <option value="Нерюнгри">Нерюнгри</option>
              </select>
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </nav>

      <h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        {`Привет, ${user.name}!`}
      </h2>

      <div className="container-fluid home-div">
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingLeft: '100px' }}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      <script defer src="./script.js" />
    </Layout>
  );
}

module.exports = Home;
