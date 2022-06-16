const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>

      <div>
        <p>Авторизация</p>
        <form method="post" action="/log">
          <input name="login" type="text" placeholder="Login" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Зайти на сайт</button>
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
