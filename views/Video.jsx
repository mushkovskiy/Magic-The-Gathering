const React = require('react');
const Layout = require('./Layout');

function Video() {
  return (
    <Layout>
      <body className="video-background">
      <iframe width="1570px" height="600px" src="https://www.youtube.com/embed/1nNuG0wx0fU?start=267?rel=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>MTG</iframe> 
      <br />
      <div className="btn-video">
        <button className="btn btn-primary" type="submit"><a className="nav-link" href="/home">Домой</a></button>
      </div>
      </body>
    </Layout>
  );
}

module.exports = Video;
