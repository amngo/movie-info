import ky from 'ky';
const API_KEY = 'cbe75b16ea78cdf8eb9d59434a2e3626';
const api = ky.create({ prefixUrl: 'https://api.themoviedb.org/3' });

export const getLanguages = async () => {
  const params = {
    api_key: API_KEY
  };
  const languages = {};
  const result = await api.get('configuration/languages', { searchParams: params }).json();
  result.forEach(({ iso_639_1, english_name }) => (languages[iso_639_1] = english_name));
  return languages;
};

export const getMovieGenres = async () => {
  const params = {
    api_key: API_KEY
  };
  const genres = {};
  const { genres: items } = await api.get('genre/movie/list', { searchParams: params }).json();
  items.forEach(({ id, name }) => (genres[id] = name));
  return genres;
};

export const getTvGenres = async () => {
  const params = {
    api_key: API_KEY
  };
  const genres = {};
  const { genres: items } = await api.get('genre/tv/list', { searchParams: params }).json();
  items.forEach(({ id, name }) => (genres[id] = name));
  return genres;
};

export const getMedia = async (endpoint, params = {}) => {
  params = { api_key: API_KEY, region: 'US', ...params, primary_release_year: params.year };
  delete params.year;
  const [results1, results2] = await Promise.all([
    api
      .get(endpoint, {
        searchParams: params
      })
      .json(),
    api
      .get(endpoint, {
        searchParams: { ...params, page: params.page + 1 }
      })
      .json()
  ]);

  const results = { ...results1, results: [...results1.results, ...results2.results] };

  return results;
};

export const searchMulti = async (query, page = 1) => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query,
    page,
    include_adult: 'false'
  };
  const results = await api
    .get(`search/multi`, {
      searchParams: params
    })
    .json();
  return results;
};

export const getPerson = async id => {
  const params = {
    api_key: API_KEY
  };

  const results = await api.get(`person/${id}`, { searchParams: params }).json();
  return results;
};

export const getMovie = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_image_language: 'null'
  };

  const [data, { backdrops }, { cast, crew }, { keywords }, recommendations, { results: items }, { results: videos }, social] = await Promise.all([
    api
      .get(`movie/${id}`, {
        searchParams: params
      })
      .json(),
    await api
      .get(`movie/${id}/images`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/credits`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/keywords`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/recommendations`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/release_dates`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/videos`, {
        searchParams: params
      })
      .json(),
    api
      .get(`movie/${id}/external_ids`, {
        searchParams: params
      })
      .json()
  ]);

  let certification,
    trailer = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i]['iso_3166_1'] === 'US') {
      for (let j = 0; j < items[i]['release_dates'].length; j++) {
        certification = items[i]['release_dates'][j].certification;
        if (certification !== '') break;
      }
    }
  }

  for (let i = 0; i < videos.length; i++) {
    if (videos[i]['type'] === 'Trailer' && videos[i]['site'] === 'YouTube') {
      trailer = videos[i].key;
      break;
    }
  }

  certification = certification ? certification : 'NR';

  return {
    ...data,
    backdrops,
    cast,
    crew,
    recommendations,
    certification,
    keywords,
    trailer,
    social
  };
};

export const getTv = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_image_language: 'null'
  };

  const [data, { backdrops }, { cast, crew }, { results: keywords }, similarMovies, { results: items }] = await Promise.all([
    api
      .get(`tv/${id}`, {
        searchParams: params
      })
      .json(),
    await api
      .get(`tv/${id}/images`, {
        searchParams: params
      })
      .json(),
    api
      .get(`tv/${id}/credits`, {
        searchParams: params
      })
      .json(),
    api
      .get(`tv/${id}/keywords`, {
        searchParams: params
      })
      .json(),
    api
      .get(`tv/${id}/similar`, {
        searchParams: params
      })
      .json(),
    api
      .get(`tv/${id}/content_ratings`, {
        searchParams: params
      })
      .json()
  ]);

  let certification = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i]['iso_3166_1'] === 'US') {
      certification = items[i]['rating'];
      break;
    }
  }

  certification = certification ? certification : 'NR';

  return {
    ...data,
    backdrops,
    cast,
    crew,
    similarMovies,
    certification,
    keywords
  };
};
