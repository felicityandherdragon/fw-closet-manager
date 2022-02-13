const router = require('express').Router();
const {
  models: { ClothingItem, Colors, User, UserColors, ItemColors },
} = require('../db');
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const results = await ClothingItem.findAll({
//       include: [User],
//     });
//     res.send(results);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/:sessionId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        currentSession: req.params.sessionId,
      },
    });
    const results = await ClothingItem.findAll({
      where: {
        userId: user.id,
      },
      include: [User],
    });
    res.send(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      itemName,
      brand,
      color,
      category,
      purchasedOn,
      imageSrc,
      season,
      userId,
    } = req.body;
    const newItem = await ClothingItem.create({
      itemName,
      brand,
      color,
      category,
      purchasedOn,
      imageSrc,
      season,
      userId,
    });
    newItem.color.forEach(async (color) => {
      const colorId = await Colors.checkIfExists(color);
      await UserColors.createWithCheck({
        userId: userId,
        colorId: colorId,
      });
      await ItemColors.create({
        clothingitemId: newItem.id,
        colorId: colorId,
      });
    });
    res.send(newItem);
  } catch (err) {
    next(err);
  }
});
