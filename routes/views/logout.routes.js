// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const logoutRouter = require('express').Router();

logoutRouter.get('/logout', (req, res) => {
  // new filestore({ logFn() {} });
  req.session.destroy((err) => {
    if (err) { console.log(err.message); }
  });
  res.clearCookie('user_sid'); // чистим куки. название берем из app.js : const sessionConfig = {... name: 'user_sid',...}
  // при переходе на ручку /logout очищаем сессию и редеректимся на главную страницу
  res.redirect('/');
});

module.exports = logoutRouter;
