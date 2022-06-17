const React = require('react');
const CityCard = require('./CityCard');

function FilterCardByCity({ cards }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ paddingLeft: '100px' }}>
      {cards.map((card) => (
        <CityCard key={card.id} card={card} />
      ))}
    </div>
  );
}

module.exports = FilterCardByCity;
