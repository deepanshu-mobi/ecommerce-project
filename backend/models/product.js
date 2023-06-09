const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('product', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  }
},{
  paranoid: true,
});

module.exports = Product;
