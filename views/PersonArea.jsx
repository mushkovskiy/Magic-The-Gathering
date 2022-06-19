const React = require('react');
const Layout = require('./Layout');

function PersonArea() {
  return (
    <Layout>
      <body className="personArea-background">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MAGIC: THE GATHERING</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Домой</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create/basket">Корзина</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout" tabIndex="-1" aria-disabled="true">Выход</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2 style={{ textAlign: 'center', paddingTop: '20px', marginTop: '200px' }}>Создай свою карточку:</h2>

        <div style={{ width: '1000px', marginTop: '30px' }}>
          <form method="POST" action="/newCard" style={{ marginLeft: '100px' }}>
            <div className="row mb-3" style={{ width: '700px' }}>
              <label htmlFor="inputName1" className="col-sm-2 col-form-label">Название:</label>
              <div className="col-sm-10">
                <input name="name" type="text" className="form-control" id="inputName1" placeholder="Название" />
              </div>
            </div>
            <div className="row mb-3" style={{ width: '700px' }}>
              <label htmlFor="inputPhoto1" className="col-sm-2 col-form-label">Фото:</label>
              <div className="col-sm-10">
                <input name="photo" type="text" placeholder="Фото" className="form-control" id="inputPhoto1" />
              </div>
            </div>
            <div className="row mb-3" style={{ width: '700px' }}>
              <label htmlFor="inputPrice1" className="col-sm-2 col-form-label">Цена:</label>
              <div className="col-sm-10">
                <input name="price" type="text" className="form-control" id="inputPrice1" placeholder="Цена" />
              </div>
            </div>
            <div className="row mb-3" style={{ width: '700px' }}>
              <label htmlFor="inputIznos1" className="col-sm-2 col-form-label">Изношеность:</label>
              <div className="col-sm-10">
                <input name="condition" type="text" placeholder="Степень изношености" className="form-control" id="inputIznos1" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-create">Добавить</button>

            <script defer src="/application.js" />
          </form>
        </div>
      </body>
    </Layout>
  );
}

module.exports = PersonArea;
