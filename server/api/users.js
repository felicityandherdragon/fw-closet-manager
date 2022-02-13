const router = require('express').Router();
const crypto = require('crypto');
const {
  models: { User },
} = require('../db');
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const results = await User.findAll();
//     res.send(results);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/byemail', async (req, res, next) => {
  try {
    const sessionToken = crypto.randomBytes(20).toString('hex');
    const results = await User.findOne({ where: { email: req.query.email } });
    if (results) {
      await results.update({
        currentSession: sessionToken,
        profilePic: req.query.profilePic,
      });
      console.log('if user existing', results);
      res.send(results);
    } else {
      console.log('profile pic link?', req.query.profilePic);
      const newUser = await User.create({
        email: req.query.email,
        currentSession: sessionToken,
      });
      await newUser.update({
        profilePic: req.query.profilePic,
      });
      console.log('if new user', newUser);
      res.send(newUser);
    }
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
