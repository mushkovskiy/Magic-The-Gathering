const ReactDOMServer = require('react-dom/server');
const React = require('react');
const basketRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Main = require('../../views/Main');
const Reg = require('../../views/Reg');
const Log = require('../../views/Log');
const { User } = require('../../db/models');
const Baskets = require('../../views/Baskets');

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

// basketRouter.get('/create/basket', (req, res) => {
//   const basket = React.createElement(Basket, { cards });
//   const html = ReactDOMServer.renderToStaticMarkup(basket);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

module.exports = basketRouter;
