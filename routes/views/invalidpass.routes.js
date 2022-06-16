const ReactDOMServer = require('react-dom/server');
const React = require('react');
const invalidpassRouter = require('express').Router();
const Invalidpass = require('../../views/Invalidpass');

invalidpassRouter.get('/invalidpass', (req, res) => {
  const invalidpass = React.createElement(Invalidpass, {});
  const html = ReactDOMServer.renderToStaticMarkup(invalidpass);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = invalidpassRouter;
