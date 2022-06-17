const React = require('react');
const Layout = require('./Layout');

function Invalidpass() {
  return (
    <Layout>
      <p className="invalidpass">Неверно введены логин или пароль!</p>
      <img className="img-invalidpass" src="/images/invalidpass.jpg" alt="" width="100%" />
    </Layout>
  );
}

module.exports = Invalidpass;
