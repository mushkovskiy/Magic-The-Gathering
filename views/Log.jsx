const React = require('react');
const Layout = require('./Layout');

function Log() {
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
            </ul>
          </div>
        </div>
      </nav>

      <h2 style={{ textAlign: 'center', margin: '20px' }}>Авторизация</h2>

      <div style={{ width: '400px' }}>
        <form method="post" action="/log">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Логин:</label>
            <div className="col-sm-10">
              <input name="login" type="text" className="form-control" id="inputEmail3" placeholder="Логин" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Пароль:</label>
            <div className="col-sm-10">
              <input name="password" type="password" placeholder="Пароль" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Войти</button>
          {/* Осталось понять как выровнять кнопку по центру */}
        </form>
      </div>
    </Layout>
  );
}

module.exports = Log;
