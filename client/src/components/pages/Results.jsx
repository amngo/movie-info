import queryString from 'query-string';
import React, { useContext, useEffect } from 'react';
import { getMovies, searchMovies } from '../../api';
import { MovieContext } from '../../context/movie-context';
import Loader from '../Loader/Loader';
import Movies from '../Movies';

const Results = ({ location: { search }, endpoint }) => {
  const { movies, setMovies } = useContext(MovieContext);
  useEffect(() => {
    let { page, q } = queryString.parse(search);
    page = page ? parseInt(page) : 1;
    const getData = async () => {
      let data;

      if (endpoint) data = await getMovies(endpoint, page);
      else data = await searchMovies(q, page);

      const { results, total_results, total_pages } = data;
      setMovies({
        items: results,
        totalResults: total_results,
        totalPages: total_pages,
        currentPage: page
      });
    };
    getData();
    console.log('rendered');

    return () => {
      setMovies({
        items: null,
        totalPages: null,
        currentPage: null,
        totalResults: null
      });
    };
  }, [search, setMovies, endpoint]);

  return movies.items ? <Movies movies={movies.items} /> : <Loader />;
};

export default Results;
