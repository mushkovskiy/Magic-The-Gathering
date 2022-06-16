const ReactDOMServer = require('react-dom/server');
const React = require('react');
const orderRouter = require('express').Router();
const Test = require('../../views/Test');
const mailer = require('../../nodeMailer');

orderRouter.get('/test', (req, res) => {
  const element = React.createElement(Test);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

orderRouter.post('/test', async (req, res) => {
  const { email, login } = req.body;
  if (!email || !login) return res.sendStatus(400);
  const maillist = `${req.body.email}, Tikhonova7973@yandex.ru`;
  const message = {
    to: maillist,
    subject: `${req.body.name} вы оформили заказ на сайте MAGIC: THE GATHERING!`,
    html: `
      <h2>Поздравляем, Вы успешно оформили заказ на сайте MAGIC: THE GATHERING!</h2>
      <i>данные вашего заказа:</i>
      <ul>
          <li>Ваша почта: ${req.body.email}</li>       
          <li>Ваш заказ: ${req.body.email}</li>    
      </ul>
      <p>Данное письмо не требует ответа.<p>`,
  };
  mailer(message);
  const user = req.body;
  res.redirect('/');
  console.log(user);
});

module.exports = orderRouter;
