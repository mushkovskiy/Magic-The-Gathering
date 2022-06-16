const React = require('react');
const Layout = require('./Layout');

function Video() {
  return (
    <Layout>
      <iframe width="1598" height="693" src="https://www.youtube.com/embed/1nNuG0wx0fU?start=26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>MTG</iframe>
    </Layout>
  );
}

module.exports = Video;
