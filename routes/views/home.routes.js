const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();

const Home = require('../../views/Home');

const cards = [
  {
    id: 1,
    title: 'Заголовок',
    url: 'https://picsum.photos/200/300?random=1',
    price: 250,
    condition: 'text',
    user_id: 2,
  },
  {
    id: 1,
    title: 'Заголовок',
    url: 'https://picsum.photos/200/300?random=1',
    price: 250,
    condition: 'text',
    user_id: 2,
  },
  {
    id: 1,
    title: 'Заголовок',
    url: 'https://picsum.photos/200/300?random=1',
    price: 250,
    condition: 'text',
    user_id: 2,
  },
  {
    id: 1,
    title: 'Заголовок',
    url: 'https://picsum.photos/200/300?random=1',
    price: 250,
    condition: 'text',
    user_id: 2,
  },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
  // {
  //   id: 1,
  //   title: 'Заголовок',
  //   url: 'https://picsum.photos/200/300?random=1',
  //   price: 250,
  //   condition: 'text',
  //   user_id: 2,
  // },
];

homeRouter.get('/home', async (req, res) => {
  const home = React.createElement(Home, { cards });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = homeRouter;
