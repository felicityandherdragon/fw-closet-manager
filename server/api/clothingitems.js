const router = require('express').Router();
const {
  models: { ClothingItem },
} = require('../db');
const User = require('../db/models/User');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const results = await ClothingItem.findAll();
    res.send(results);
  } catch (err) {
    next(err);
  }
});

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
    res.send(newItem);
  } catch (err) {
    next(err);
  }
});
