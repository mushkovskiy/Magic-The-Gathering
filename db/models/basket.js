const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      Basket.User = Basket.belongsTo(User, { foreignKey: 'user_id' });
      Basket.Card = Basket.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Basket.init({
    user_id: {
      type: DataTypes.INTEGER,
    },
    card_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Basket',
    tableName: 'Baskets',
  });
  return Basket;
};
