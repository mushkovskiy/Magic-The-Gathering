// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const sendEmailRouter = require('express').Router();
const { Basket } = require('../../db/models');
const mailer = require('../../nodeMailer');

sendEmailRouter.post('/sendEmail', async (req, res) => {
  const joinAll = await Basket.findAll({
    raw: true,
    include: [Basket.User, Basket.Card],
  });
  const join = joinAll.filter((obj) => obj['User.id'] === req.session.userId);
  // console.log(join);
  const email = join[0]['User.email'];
  const nameUser = join[0]['User.name'];
  const nameCards = join.map((obj) => obj['Card.title']);
  const sumPrice = join.reduce((acc, obj) => acc + obj['Card.price'], 0);
  const iznosh = join.map((obj) => obj['Card.condition']);
  const nameIznosh = nameCards.map((el, i) => `${el} в состоянии ${iznosh[i]}`).join('\n');
  // console.log(nameUser);
  // console.log(email);
  // console.log(nameCards);
  // console.log(sumPrice);
  // console.log(nameIznosh);

  // const { email, login } = req.body;
  // if (!email || !login) return res.sendStatus(400); // Здесь нужно обработать ошибку!!
  const maillist = `${email}, Tikhonova7973@yandex.ru`;

  const message = {
    to: maillist,
    subject: `${nameUser} приветствуем! Вы оформили заказ на сайте MAGIC: THE GATHERING!`,
    html: `
      <h2>Поздравляем, Вы успешно оформили заказ на сайте MAGIC: THE GATHERING!</h2>
      <i>Ваш заказ содержит следующие карточки: 
      <ul>
      <li>${nameIznosh}</li>
      </ul><br />
      <i>На общую сумму: ${sumPrice} руб.</i>
      <h2>Данное письмо не требует ответа</h2>
      <h2>Благодарим за заказ! До новых встреч!</h2>`,
  };
  // console.log(message);
  mailer(message);
  // const user = req.body;
  // alert('Проверьте свой email');
  res.redirect('/home');
  // console.log(user);
});

module.exports = sendEmailRouter;
