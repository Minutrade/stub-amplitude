const axios = require('axios');

async function postData(data) {
  try {
    const response = await axios.post('https://minutrade-callback.glitch.me/callback/registered/james.gomes', data);
    console.log(response.data);
    return response.status;
  } catch (error) {
    console.error(error);
    return error.response.status;
  }
}

module.exports = {
  postData
}