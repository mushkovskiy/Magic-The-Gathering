const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>

      <div>
        <p>Регистрация</p>
        <form method="post" action="/reg" />
        <input name="name" type="text" placeholder="Name" />
        <input name="login" type="text" placeholder="Login" />
        <input name="password" type="password" placeholder="Password" />
        <input name="email" type="text" placeholder="E-mail" />
        <input name="city" type="text" placeholder="City" />
        <button type="submit">Зарегистрироваться</button>
      </div>

      {/* <script defer src="/main.js" /> */}
    </Layout>
  );
}

module.exports = Reg;
