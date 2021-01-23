const axios = require('axios');

export const getUrl = url => {
  return axios.get(url);
}