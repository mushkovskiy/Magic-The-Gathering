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
  const {
    name, login, password, email, city,
  } = req.body;

  const user = await User.findOne({ where: { email } });
  if (user) {
    res.send('Такой пользователь уже есть'); // нужно заменить на красивую отрисовку
    return;
  }
  const newUser = await User.create({
    name,
    login,
    password: await bcrypt.hash(password, 10),
    email,
    city,
  });
  res.redirect('/login');
});

authRouter.get('/log', (req, res) => {
  const element = React.createElement(Log);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

authRouter.post('/log', async (req, res) => {
  const { login, email, password } = req.body;
  // console.log(email);
  // console.log(password);
  const checkedUser = await User.findOne({ where: { email }, raw: true });
  // console.log(checkedUser);
  // console.log(checkedUser.email);
  // console.log(email);
  const isSame = await bcrypt.compare(password, checkedUser.password);
  if (checkedUser.login === login && isSame) {
    req.session.userId = checkedUser.id; // раздаем куки
    // console.log(req.session);
    return res.redirect('/home');
  }
  res.send('Неверно введены логин или пароль'); // нужно заменить на красивую отрисовку
});

module.exports = authRouter;
