const ReactDOMServer = require('react-dom/server');
const React = require('react');
const videoRouter = require('express').Router();
const Video = require('../../views/Video');

videoRouter.get('/video', (req, res) => {
  const video = React.createElement(Video, {});
  const html = ReactDOMServer.renderToStaticMarkup(video);
  res.write('<!DOCTYPE html>');
  res.end(html);
})
module.exports = videoRouter;
