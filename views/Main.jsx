const React = require('react');
const Layout = require('./Layout');

function Main() {
  return (
    <Layout>

      <div>
        <a href="/reg">Зарегистрироваться</a>
        <a href="/log">Войти</a>
      </div>

      {/* <script defer src="/main.js" /> */}
    </Layout>
  );
}

module.exports = Main;
