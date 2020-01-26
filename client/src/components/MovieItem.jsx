import chroma from 'chroma-js';
import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/img/placeholder.png';

const MovieItem = ({
  movie: { id, poster_path, title, vote_average, release_date }
}) => {
  const color = chroma.mix('red', 'green', vote_average / 10, 'hsl').toString();
  poster_path = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : placeholder;

  return (
    <Link to={`/movie/${id}`} className="">
      <div className="relative">
        <img src={poster_path} alt={title} className="mb-2 hover:opacity-75" />
        <div
          className="absolute flex items-center justify-center w-10 h-10 text-sm rounded-full"
          style={{
            top: '98%',
            left: '98%',
            transform: 'translate(-100%,-100%)',
            backgroundColor: vote_average === 0 ? '#2D3548' : color
          }}
        >
          {vote_average === 0 ? 'NR' : vote_average}
        </div>
      </div>
      <div className="text-sm truncate">{title}</div>
    </Link>
  );
};

export default MovieItem;
