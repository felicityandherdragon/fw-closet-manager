const router = require('express').Router();
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res) => {
  try {
    let user_id = process.env.CLARIFAI_USER_ID;
    let app_id = process.env.CLARIFAI_APP_ID;
    let token = process.env.CLARIFAI_PERSONAL_ACCESS_TOEKN;
    let model_id = process.env.CLARIFAI_COLOR_MODEL_ID;
    let model_version_id = process.env.CLARIFAI_COLOR_MODEL_VERSION_ID;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: user_id,
        app_id: app_id,
      },
      inputs: [
        {
          data: {
            image: {
              url: `${req.query.imageSrc}`,
            },
          },
        },
      ],
    });

    const response = (
      await axios.post(
        `https://api.clarifai.com/v2/models/${model_id}/versions/${model_version_id}/outputs`,
        raw,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Key ${token}`,
          },
        }
      )
    ).data;

    const sortedColors = response.outputs[0].data.colors.sort(
      (a, b) => b.value - a.value
    );
    res.send(sortedColors);
  } catch (err) {
    console.log(err);
  }
});
