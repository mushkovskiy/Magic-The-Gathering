const ReactDOMServer = require('react-dom/server');
const React = require('react');
const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Main = require('../../views/Main');
const Reg = require('../../views/Reg');
const Log = require('../../views/Log');

const { User } = require('../../db/models');

authRouter.get('/', (req, res) => {
  const element = React.createElement(Main);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

authRouter.get('/reg', (req, res) => {
  const element = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

authRouter.post('/reg', async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  const {
    name, login, password, email, city,
  } = req.body;

  const user = await User.findOne({ where: { email } });
  if (user) {
    alert('Такой логин или электронная почта уже заняты'); // нужно заменить на красивую отрисовку
    return;
  }
  const newUser = await User.create({
    name,
    login,
    password: await bcrypt.hash(password, 10),
    email,
    city,
  });
  res.redirect('/log');
});

authRouter.get('/log', (req, res) => {
  const element = React.createElement(Log);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

authRouter.post('/log', async (req, res) => {
  console.log(req.body);
  const { login, password } = req.body;
  const checkedUser = await User.findOne({ where: { login }, raw: true });
  const isSame = await bcrypt.compare(password, checkedUser.password);
  if (checkedUser.login === login && isSame) {
    req.session.userId = checkedUser.id; // раздаем куки
    // console.log(req.session);
    return res.redirect('/home');
  }
  alert('Неверно введены логин или пароль'); // нужно заменить на красивую отрисовку
});
// authRouter.get('/logout', (req, res) => {
//   // new filestore({ logFn() {} });
//   req.session.destroy((err) => {
//     if (err) { console.log(err.message); }
//   });
//   res.clearCookie('user_sid'); // чистим куки. название берем из app.js : const sessionConfig = {... name: 'user_sid',...}
//   // при переходе на ручку /logout очищаем сессию и редеректимся на главную страницу
//   res.redirect('/');
// });

module.exports = authRouter;
