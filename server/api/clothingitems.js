const router = require('express').Router();
const {
  models: { ClothingItem },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const results = await ClothingItem.findAll();
    res.send(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const results = await ClothingItem.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.send(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const { itemName, brand, color, category, purchasedOn, imageSrc, season, userId } =
      req.body;
    const newItem = await ClothingItem.create({
      itemName,
      brand,
      color,
      category,
      purchasedOn,
      imageSrc,
      season,
      userId
    });
    res.send(newItem);
  } catch (err) {
    next(err);
  }
});
