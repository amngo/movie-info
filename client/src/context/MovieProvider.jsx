import React, { useState } from 'react';
import { MovieContext } from './movie-context';

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({
    items: null,
    totalPages: null,
    currentPage: null,
    totalResults: null
  });

  const [movieImage, setMovieImage] = useState(null);
  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        setMovieImage,
        movieImage
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
