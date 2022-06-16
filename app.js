require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');

const logger = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
const { sequelize } = require('./db/models');

const authRouter = require('./routes/views/auth.routes');
const homeRouter = require('./routes/views/home.routes');
const addCards = require('./routes/views/add.cards.routers');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', authRouter);
app.use(homeRouter);
app.use(addCards);

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log('Веб-сервер слушает порт', PORT);

  // try {
  //   await sequelize.authenticate();
  //   console.log('БД-сервер подключен успешно');
  // } catch (error) {
  //   console.log('БД-сервер не подключен');
  //   console.log(error.message);
  // }
  /* eslint-enable */
});
