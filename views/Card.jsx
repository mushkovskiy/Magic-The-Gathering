const React = require('react');

function Card({ card }) {
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
        <img src={card.url} className="card-img-top" alt="Cards" />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Цена: ${card.price}`}</li>
          <li className="list-group-item">{`Состояние: ${card.condition}`}</li>
          {/* <li className="list-group-item">{card.user_id}</li> */}
        </ul>
      </div>
          <a href={`/add/${card.id}`}><button type="submit" className="btn btn-primary btn-add">Добавить в корзину</button></a>
    </div>
  );
}

module.exports = Card;
