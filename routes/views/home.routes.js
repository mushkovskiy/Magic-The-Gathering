const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();
const { User } = require('../../db/models');
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
  console.log(req.session);
  const user = await User.findOne({ where: { id: req.session.userId } });
  const home = React.createElement(Home, { cards, user });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = homeRouter;
