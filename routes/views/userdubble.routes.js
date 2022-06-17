const ReactDOMServer = require('react-dom/server');
const React = require('react');
const userdubbleRouter = require('express').Router();
const Userdubble = require('../../views/Userdubble');

userdubbleRouter.get('/userdubble', (req, res) => {
  const userdubble = React.createElement(Userdubble, {});
  const html = ReactDOMServer.renderToStaticMarkup(userdubble);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = userdubbleRouter;
