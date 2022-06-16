const React = require('react');
const Layout = require('./Layout');

function Main() {
  return (
    <Layout>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MAGIC: THE GATHERING</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/log">Вход</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reg">Регистрация</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 style={{ margin: '40px', textAlign: 'center' }}>MAGIC: THE GATHERING</h1>

      {/* Нужно впилить сюда какой то текст про эту игру */}

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/img1.jpg" className="d-block w-100" alt="MAGIC: THE GATHERING" style={{ width: '1200px' }} />
          </div>
          <div className="carousel-item">
            <img src="./img/img2.jpg" className="d-block w-100" alt="MAGIC: THE GATHERING" style={{ width: '1200px' }} />
          </div>
          <div className="carousel-item">
            <img src="./img/img3.jpg" className="d-block w-100" alt="MAGIC: THE GATHERING" style={{ width: '1200px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </Layout>
  );
}

module.exports = Main;
