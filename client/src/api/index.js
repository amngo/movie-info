import axios from 'axios';
const API_KEY = 'cbe75b16ea78cdf8eb9d59434a2e3626';

export const GENRE_MAP = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

export const discoverMovies = async () => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    sort_by: 'popularity.desc'
  };
  const {
    data: { results }
  } = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params
  });

  return results;
};

export const getMovies = async (endpoint, page = 1) => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    page
  };
  const { data: results } = await axios.get(
    `https://api.themoviedb.org/3${endpoint}`,
    {
      params
    }
  );

  return results;
};

export const searchMovies = async (query, page = 1) => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query,
    page,
    include_adult: 'false'
  };
  const { data: results } = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params
    }
  );

  return results;
};

export const getMovie = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_image_language: 'null'
  };

  //Get movie information
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params
  });

  //Get movie cover image
  const {
    data: { backdrops }
  } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
    params
  });

  //Get movie cast
  const {
    data: { cast }
  } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    params
  });

  //Get similar movies
  const {
    data: { results }
  } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {
    params
  });

  const similarMovies = results.slice(0, 5);

  //Get certification
  const {
    data: { results: items }
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/release_dates`,
    {
      params
    }
  );

  let certification = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i]['iso_3166_1'] === 'US') {
      certification = items[i]['release_dates'][0].certification;
      break;
    }
  }

  certification = certification ? certification : 'NR';

  return { ...data, backdrops, cast, similarMovies, certification };
};
