const ReactDOMServer = require('react-dom/server');
const React = require('react');
const cityRouter = require('express').Router();
const City = require('../../views/City');

const { User } = require('../../db/models');

cityRouter.post('/city', async (req, res) => {
  const cards = await User.findAll({
    raw: true,
    include: [User.Card],
  });
  const filterCards = cards.filter((el) => el.city === req.body.city);
  const city = React.createElement(City, { cards: filterCards });
  const html = ReactDOMServer.renderToStaticMarkup(city);
  res.end(html);
});

module.exports = cityRouter;
