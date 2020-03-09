import { getMovie } from 'api';
import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import Movie from './Movie';

const MovieContainer = ({ match }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await getMovie(match.params.id);
      setMovie(data);
    };
    getData();

    return () => {
      setMovie(null);
    };
  }, [match.params.id]);

  return movie ? <Movie movie={movie} /> : <Loader />;
};

export default MovieContainer;
