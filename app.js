require('@babel/register');
const express = require('express');
// const expressConfig = require('./config/express');

const homeRouter = require('./routes/views/home.routes');

const app = express();

// expressConfig(app);

app.use(homeRouter);

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(3000, () => 'server started at 3000');
