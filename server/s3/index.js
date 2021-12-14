const router = require('express').Router();
const generateUploadURL = require('./getS3Url');
module.exports = router;

router.get('/', async (req, res) => {
  const url = await generateUploadURL();
  res.send(url);
});
