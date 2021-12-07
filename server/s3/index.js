const router = require('express').Router();
const generateUploadURL = require('./getS3Url');
module.exports = router;

router.get('/', async (req, res) => {
  const url = await generateUploadURL();
  console.log('am i getting the url back?', url);
  res.send(url);
});
