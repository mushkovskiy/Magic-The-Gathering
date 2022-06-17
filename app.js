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
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
const { sequelize } = require('./db/models');

const basketRouter = require('./routes/views/basket.routes');
const personRouter = require('./routes/views/person.routes');
const cardRouter = require('./routes/api/card.router');
const authRouter = require('./routes/views/auth.routes');
const homeRouter = require('./routes/views/home.routes');
const cityRouter = require('./routes/api/city.routes');

const logoutRouter = require('./routes/views/logout.routes');
const orderRouter = require('./routes/views/order.routes');

const addCards = require('./routes/views/add.cards.routers');

const videoRouter = require('./routes/views/video.routes');
const invalidpassRouter = require('./routes/views/invalidpass.routes');
const userdubbleRouter = require('./routes/views/userdubble.routes');
const sendEmailRouter = require('./routes/views/sendEmail.routes');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);
app.use(homeRouter);
app.use(basketRouter);
app.use(addCards);
app.use(personRouter);
app.use(cityRouter);
app.use(logoutRouter);
app.use(orderRouter);

app.use(cardRouter);
app.use(videoRouter);
app.use(invalidpassRouter);
app.use(userdubbleRouter);
app.use(sendEmailRouter);

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
