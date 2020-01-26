import React from 'react';
import { animated, useTrail } from 'react-spring';
import ReactTooltip from 'react-tooltip';
import MovieItem from './MovieItem';
import MovieTooltip from './MovieTooltip';

const config = { mass: 5, tension: 2500, friction: 200 };

const Movies = ({ movies }) => {
  const trail = useTrail(movies.length, {
    config,
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 }
  });

  return (
    <div className="flex flex-wrap">
      {movies.map(movie => (
        <ReactTooltip place="left" key={movie.id} id={`${movie.id}`}>
          <MovieTooltip movie={movie} />
        </ReactTooltip>
      ))}

      {trail.map(({ x, ...otherProps }, i) => (
        <animated.div
          key={i}
          style={{
            ...otherProps,
            transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
          }}
          className="w-1/5 p-4 cursor-pointer hover:bg-movie-dark"
          data-tip
          data-for={movies[i].id}
        >
          <MovieItem movie={movies[i]} />
        </animated.div>
      ))}
    </div>
  );
};

export default Movies;
