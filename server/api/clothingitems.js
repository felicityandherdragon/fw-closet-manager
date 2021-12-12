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

router.post('/', async (req, res, next) => {
  try {
    const { itemName, brand, color, category, purchasedOn, imageSrc, season } =
      req.body;
    const newItem = await ClothingItem.create({
      itemName,
      brand,
      color,
      category,
      purchasedOn,
      imageSrc,
      season,
    });
    res.send(newItem);
  } catch (err) {
    next(err);
  }
});
