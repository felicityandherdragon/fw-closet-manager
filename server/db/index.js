const db = require('./db');
//import models
const User = require('./models/User');
const ClothingItem = require('./models/ClothingItem');

//relations
ClothingItem.belongsTo(User);
User.hasMany(ClothingItem);

module.exports = {
  db,
  models: {
    User,
    ClothingItem,
  },
};
