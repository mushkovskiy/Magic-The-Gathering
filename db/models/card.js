const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket }) {
      Card.Basket = Card.hasMany(Basket, { foreignKey: 'card_id' });
    }
  }
  Card.init({
    title: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    condition: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'Cards',
  });
  return Card;
};
