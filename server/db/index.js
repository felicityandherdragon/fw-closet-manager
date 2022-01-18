const db = require('./db');
//import models
const User = require('./models/User');
const ClothingItem = require('./models/ClothingItem');
const Colors = require('./models/Colors');
const UserColors = require('./models/UserColors');
const ItemColors = require('./models/ItemColors');

//relations
ClothingItem.belongsTo(User);
User.hasMany(ClothingItem);

Colors.belongsToMany(User, {
  through: UserColors,
});
User.belongsToMany(Colors, { through: UserColors });
Colors.hasMany(UserColors);
UserColors.belongsTo(Colors);
User.hasMany(UserColors);
UserColors.belongsTo(User);

Colors.belongsToMany(ClothingItem, {
  through: ItemColors,
});
ClothingItem.belongsToMany(Colors, { through: ItemColors });
Colors.hasMany(ItemColors);
ItemColors.belongsTo(Colors);
ClothingItem.hasMany(ItemColors);
ItemColors.belongsTo(ClothingItem);

module.exports = {
  db,
  models: {
    User,
    ClothingItem,
    Colors,
    UserColors,
    ItemColors,
  },
};
