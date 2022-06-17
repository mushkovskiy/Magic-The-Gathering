const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

const Baskets = require('../../views/Baskets');
const { User, Basket, Card } = require('../../db/models');
const { route } = require('./auth.routes');

router.route('/add/:id')
  .get(async (req, res) => {
    const { userId } = req.session;

    const cardId = req.params.id;
    const card = await Basket.create({
      user_id: userId,
      card_id: cardId,
    });
    res.status('OK');
  });

router.route('/create/basket').get(async (req, res) => {
  const cards = await Basket.findAll({
    raw: true,
    where: { user_id: req.session.userId },
    include: [Basket.Card],
  });

  const { dataValues } = await User.findOne({ where: { id: req.session.userId } });
  const { city } = dataValues;
  const arr = [];

  cards.forEach((c) => arr.push({
    id: c['Card.id'],
    title: c['Card.title'],
    url: c['Card.url'],
    price: c['Card.price'],
    condition: c['Card.condition'],
    city,
  }));
  const basket = React.createElement(Baskets, { arr });
  const html = ReactDOMServer.renderToStaticMarkup(basket);
  res.write('<!DOCTYPE html>');
  res.end(html);

  const join = await Basket.findAll({
    raw: true,
    include: [Basket.User, Basket.Card],
    attributes: ['Card.title'],
  });
  res.end();
});
module.exports = router;
