const { UUID, UUIDV4, STRING, DATE, ENUM, ARRAY, JSON } = require('sequelize');
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
    type: ARRAY(JSON),
    allowNull: true,
  },
  category: {
    type: ARRAY(STRING),
    allowNull: true,
  },
  purchasedOn: {
    type: DATE,
    allowNull: false,
  },
  imageSrc: {
    type: STRING,
    allowNull: true,
  },
  season: {
    type: ENUM(['Spring', 'Summer', 'Autumn', 'Winter']),
    allowNull: true,
  },
});

module.exports = ClothingItem;
