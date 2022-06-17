require('@babel/register');
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

const authRouter = require('./routes/views/auth.routes');
const basketRouter = require('./routes/views/basket.routes');
const cardRouter = require('./routes/views/card.routes');
const homeRouter = require('./routes/views/home.routes');
const invalidpassRouter = require('./routes/views/invalidpass.routes');
const logoutRouter = require('./routes/views/logout.routes');
const orderRouter = require('./routes/views/order.routes');
const personRouter = require('./routes/views/person.routes');
const userdubbleRouter = require('./routes/views/userdubble.routes');
const videoRouter = require('./routes/views/video.routes');

const cardApiRouter = require('./routes/api/card.routes');
const cityApiRouter = require('./routes/api/city.routes');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);
app.use(basketRouter);
app.use(cardRouter);
app.use(homeRouter);
app.use(personRouter);
app.use(invalidpassRouter);
app.use(logoutRouter);
app.use(orderRouter);
app.use(personRouter);
app.use(userdubbleRouter);
app.use(invalidpassRouter);
app.use(videoRouter);

app.use(cardApiRouter);
app.use(cityApiRouter);

app.listen(PORT, async () => console.log('Веб-сервер слушает порт', PORT));
