const { UUID, UUIDV4 } = require('sequelize');
const db = require('../db');

// association table
const ItemColors = db.define('itemColors', {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
});

module.exports = ItemColors;
