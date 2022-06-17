const React = require('react');
const Card = require('./Card');
// const User = require('../db/models/user');

function City({ cards }) {
  return (
    <div className="container-fluid home-div">
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingLeft: '100px' }}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

module.exports = City;
