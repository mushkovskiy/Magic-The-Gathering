const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();
const { User } = require('../../db/models');
const { Card } = require('../../db/models');
const Home = require('../../views/Home');

homeRouter.get('/home', async (req, res) => {
  const user = await User.findOne({ where: { id: req.session.userId } });
  const cards = await Card.findAll();
  const home = React.createElement(Home, { cards, user });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = homeRouter;
