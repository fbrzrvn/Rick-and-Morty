const axios = require('axios');

export const getEpisodes = () => {
  return axios.get('https://rickandmortyapi.com/api/episode');
}

export const getUrl = url => {
  return axios.get(url);
}