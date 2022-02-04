const router = require('express').Router();
const generateUploadURL = require('./getS3Url');
module.exports = router;

router.get('/', async (req, res) => {
  const url = await generateUploadURL();
  res.send(url);
});

router.post('/', async (req, res) => {
  const rawFile = req.body.file;
  const buf = Buffer.from(
    rawFile.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );
  res.send(buf);
});
