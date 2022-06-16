const ReactDOMServer = require('react-dom/server');
const React = require('react');
const cardRouter = require('express').Router();

const { Card } = require('../../db/models');

cardRouter.post('/newCard', async (req, res) => {
  await Card.create({
    title: req.body.title,
    url: req.body.url,
    price: req.body.price,
    condition: req.body.condition,
  });
  res.send({ status: 'okey!' });
});

module.exports = cardRouter;
