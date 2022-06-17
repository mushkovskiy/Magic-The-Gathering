const React = require('react');
const Layout = require('./Layout');

function Userdubble() {
  return (
    <Layout>
      <p className="userdubble">Такой логин или эл почта уже заняты</p>
      <img className="img-userdubble" src="/images/userdubble.jpg" alt="" width="100%" />
    </Layout>
  );
}

module.exports = Userdubble;
