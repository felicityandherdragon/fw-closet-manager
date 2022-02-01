const router = require('express').Router();
const {
  models: { Colors, ItemColors, UserColors, User, ClothingItem },
} = require('../db');
module.exports = router;

router.get('/user/:sessionId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        currentSession: req.params.sessionId,
      },
    });
    const allColors = await UserColors.findAll({
      include: [Colors, User],
      where: {
        userId: user.id,
      },
    });
    res.send(allColors);
  } catch (err) {
    next(err);
  }
});

router.get('/item/:sessionId/:colorId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        currentSession: req.params.sessionId,
      },
    });
    const allItemsbyColor = await ItemColors.findAll({
      include: [Colors, ClothingItem],
      where: {
        colorId: req.params.colorId,
      },
    });
    const results = allItemsbyColor.filter((each) => {
      return each.clothingitem.userId === user.id;
    });
    res.send(results);
  } catch (err) {
    next(err);
  }
});
