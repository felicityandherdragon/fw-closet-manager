const { UUID, UUIDV4, STRING, DATE, ENUM } = require('sequelize');
const db = require('../db');

const ClothingItem = db.define('clothingitem', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  itemName: {
    type: STRING,
  },
  brand: {
    type: STRING,
  },
  color: {
    type: STRING,
    allowNull: true,
  },
  category: {
    type: STRING,
    allowNull: true,
  },
  purchasedOn: {
    type: DATE,
    allowNull: false,
  },
  image: {
    type: STRING,
    unique: true,
    allowNull: true,
  },
  season: {
    type: ENUM(['Spring', 'Summer', 'Autumn', 'Winter']),
  },
});

module.exports = ClothingItem;
