import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Credits from './components/Credits';
import Recommendations from './components/Recommendations';

const Movie = ({ movie }) => {
  return (
    <div
      className="flex flex-col justify-between w-full h-full"
      data-testid="movie"
    >
      <Header movie={movie} />
      <div className="p-8">
        <Info movie={movie} />
        <Credits movie={movie} />
        <Recommendations movie={movie} />
      </div>
    </div>
  );
};

export default Movie;
