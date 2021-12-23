const router = require('express').Router();
module.exports = router;

router.use('/colors', require('./colors'));
router.use('/category', require('./category'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
