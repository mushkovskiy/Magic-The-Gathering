const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>

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
          <button type="submit" className="btn btn-primary btn-log">Войти</button>
          {/* Осталось понять как выровнять кнопку по центру */}

        </form>
      </div>

      {/* <form method="POST" action="/log">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input type="text" className="form-control" id="name-input" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}

      {/* <script defer src="/main.js" /> */}
    </Layout>
  );
}

module.exports = Log;
