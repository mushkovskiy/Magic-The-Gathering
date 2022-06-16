const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket }) {
      User.Basket = User.hasMany(Basket, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
    },
    login: {
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    city: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
