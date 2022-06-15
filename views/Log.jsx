const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>

      <div>
        <p>Авторизация</p>
        <form method="post" action="/log" />
        <input name="login" type="text" placeholder="Login" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Зайти на сайт</button>
      </div>

      {/* <script defer src="/main.js" /> */}
    </Layout>
  );
}

module.exports = Log;
