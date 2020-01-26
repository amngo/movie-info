import React, { useEffect, useState } from 'react';
import { discoverMovies } from '../../api';
import Loader from '../Loader/Loader';
import Movies from '../Movies';

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const getData = async () => {
      const movies = await discoverMovies();
      setMovies(movies);
    };
    getData();
  }, []);

  return movies ? <Movies movies={movies} /> : <Loader />;
};

export default Home;
