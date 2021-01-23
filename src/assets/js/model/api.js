const axios = require('axios');

export const getEpisodes = () => {
  return axios.get('https://rickandmortyapi.com/api/episode');
}

export const getEpisode = id => {
  return axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
}