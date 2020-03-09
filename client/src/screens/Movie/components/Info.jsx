import React, {useContext} from 'react';
import moviePlaceholder from 'assets/img/movie_placeholder.png';
import { Label } from 'components/Label';
import { MediaContext } from 'context/media-context';

const Info = ({ movie }) => {
  const { mapping } = useContext(MediaContext);
  
  return (
    <div className="flex mb-8">
      <div className="flex items-start w-2/3">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : moviePlaceholder
          }
          alt=""
          className="object-contain w-56"
        />
        <div className="flex flex-col px-8">
          <h3 className="mb-2 text-xl">Overview</h3>
          <p className="text-sm">{movie.overview}</p>
        </div>
      </div>
      <div className="flex flex-col w-1/3 p-8 bg-movie-dark">
        <h3 className="mb-2 text-xl">Information</h3>
        <div className="flex flex-wrap justify-between h-full">
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">Runtime</h4>
            <span className="text-sm">
              {movie.runtime !== 0 ? `${movie.runtime} min` : 'unknown'}
            </span>
          </div>
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">Release Date</h4>
            <span className="text-sm">{movie.release_date}</span>
          </div>
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">
              Original Language
            </h4>
            <span className="text-sm">
              {mapping.languages[movie.original_language]}
            </span>
          </div>
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">Director</h4>
            <span className="text-sm">
              {movie.crew
                .filter(person => person.job === 'Director')
                .map(person => person.name)
                .join(', ')}
            </span>
          </div>
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">Budget</h4>
            <span className="text-sm">
              {movie.budget !== 0
                ? `$${movie.budget.toLocaleString()}`
                : 'unknown'}
            </span>
          </div>
          <div className="flex flex-col w-1/2 p-2">
            <h4 className="text-xs uppercase text-media-white-3">Revenue</h4>
            <span className="text-sm">
              {movie.revenue !== 0
                ? `$${movie.revenue.toLocaleString()}`
                : 'unknown'}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h4 className="my-2 text-xs uppercase text-media-white-3">Keywords</h4>
          <span className="text-xs">
            {movie.keywords.map(keyword => (
              <Label
                key={keyword.name}
                name={keyword.name}
                classes="mr-1 mb-1"
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
