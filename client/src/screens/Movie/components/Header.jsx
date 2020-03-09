import React from 'react';
import { SocialMedia } from 'components/SocialMedia';
import { FaStar } from 'react-icons/fa';
import { Label } from 'components/Label';

const Header = ({ movie }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-between p-8"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%), url(${movie
            .backdrops[0] &&
            `https://image.tmdb.org/t/p/original${movie.backdrops[0].file_path}`}) no-repeat center fixed`,
          backgroundSize: 'cover',
          height: '60vh'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center">
              <FaStar className="text-3xl" />
              <span className="mx-2 text-xl">{movie.vote_average}</span>
            </span>
            <span className="text-media-white-3">
              ({movie.vote_count} votes)
            </span>
          </div>
          <SocialMedia social={movie.social} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <h1 className="text-4xl">{movie.title}</h1>
              <span className="ml-2 text-xl text-media-white-3">{`(${movie.release_date?.substring(
                0,
                4
              )})`}</span>
            </div>
            {movie.genres.length !== 0 && (
              <div className="mb-2 text-sm">
                {movie.genres.map(genre => (
                  <Label key={genre.name} name={genre.name} classes="mr-1" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
