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

router.get('/item/:colorId', async (req, res, next) => {
  try {
    const allItemsbyColor = await ItemColors.findAll({
      include: [Colors, ClothingItem],
      where: {
        colorId: req.params.colorId,
      },
    });
    res.send(allItemsbyColor);
  } catch (err) {
    next(err);
  }
});
