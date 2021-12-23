const router = require('express').Router();
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res) => {
  try {
    const productCode = req.query.productCode;
    const productInfo = (
      await axios.get(
        `https://api.upcitemdb.com/prod/trial/lookup?upc=${productCode}`
      )
    ).data;
    res.send(productInfo);
  } catch (err) {
    console.log(err);
  }
});
