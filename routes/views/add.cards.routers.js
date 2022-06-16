const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

// const Baskets = require('../../views/Basket');
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
  const cardList = await Basket.findAll({
    raw: true,
    where: { user_id: req.session.userId },
    include: [Basket.Card],
  });
  console.log(cardList);
  res.end();
});
module.exports = router;
