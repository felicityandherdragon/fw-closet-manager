const router = require('express').Router();
const crypto = require('crypto');
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

router.get('/byemail', async (req, res, next) => {
  try {
    console.log('on server side!');
    const results = await User.findOne({ where: { email: req.query.email } });
    const sessionToken = crypto.randomBytes(20).toString('hex');
    await results.update({ currentSession: sessionToken });
    console.log(results);
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
    res.send(user);
  } catch (err) {
    next(err);
  }
});
