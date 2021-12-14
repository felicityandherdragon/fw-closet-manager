const router = require('express').Router();
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res) => {
  //https://docs.clarifai.com/api-guide/predict/images
  try {
    console.log('PREEEEDICT!');
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

    const res = (
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
    console.log(res);
    console.log(res.outputs[0].data);
    console.log(res.outputs[0].data.colors[0].w3c);

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     Authorization: `Key ${token}`,
    //   },
    //   body: raw,
    // };

    // fetch(
    //   `https://api.clarifai.com/v2/models/${model_id}/versions/${model_version_id}/outputs`,
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) =>
    //     console.log(JSON.parse(result, null, 2).outputs[0].data)
    //   )
    //   .catch((error) => console.log('error', error));
  } catch (err) {
    console.log(err);
  }
});
