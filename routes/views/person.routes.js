const ReactDOMServer = require('react-dom/server');
const React = require('react');
const personRouter = require('express').Router();

const PersonArea = require('../../views/PersonArea');

personRouter.get('/personArea', async (req, res) => {
  const personArea = React.createElement(PersonArea);
  const html = ReactDOMServer.renderToStaticMarkup(personArea);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = personRouter;
