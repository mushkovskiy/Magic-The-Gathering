const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>

      <div>
        <p>Регистрация</p>
        <form method="post" action="/reg">
          <input name="name" type="text" placeholder="Name" />
          <input name="login" type="text" placeholder="Login" />
          <input name="password" type="password" placeholder="Password" />
          <input name="email" type="text" placeholder="E-mail" />
          <input name="city" type="text" placeholder="City" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>

      {/* <form method="POST" action="/reg">
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

module.exports = Reg;
