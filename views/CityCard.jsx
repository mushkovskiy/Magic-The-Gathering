const React = require('react');

function CityCard({ card }) {
  return (
      <div className="col">
        <div className="card" style={{ width: '18rem' }}>
          <img src={card['Cards.url']} className="card-img-top" alt="Cards" />
          <div className="card-body">
            <h5 className="card-title">{['Cards.title']}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{card['Cards.condition']}</li>
            <li className="list-group-item">{card['Cards.price']}</li>
            {/* <li className="list-group-item">{card.user_id}</li>
        </ul> */}
          </ul>
        </div>
        <a href={`/add/${card['Cards.id']}`}><button type="submit" className="btn btn-primary btn-add">Добавить в корзину</button></a>
      </div>
  );
}

module.exports = CityCard;
