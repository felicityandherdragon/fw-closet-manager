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
