const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const results = await User.findAll();
    res.send(results);
  } catch (err) {
    next(err);
  }
});
