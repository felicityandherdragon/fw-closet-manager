const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/clothingitems', require('./clothingitems'));
router.use('/colors', require('./colors'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
