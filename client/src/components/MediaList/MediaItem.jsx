import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import actorPlaceholder from 'assets/img/actor_placeholder.png';
import moviePlaceholder from 'assets/img/movie_placeholder.png';
import tvPlaceholder from 'assets/img/tv_placeholder.png';

const MediaItem = ({
  index,
  media: {
    id,
    poster_path,
    profile_path,
    vote_average,
    vote_count,
    name,
    title,
    media_type,
    release_date,
    first_air_date
  },
  mediaType
}) => {
  let image;
  media_type = media_type ? media_type : mediaType;
  if (media_type === 'movie')
    image = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : moviePlaceholder;
  else if (media_type === 'tv')
    image = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : tvPlaceholder;
  else
    image = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : actorPlaceholder;

  return (
    <Link to={`/${media_type}/${id}`}>
      <img src={image} alt={name || title} className="mb-2 hover:opacity-75" />
      <div className="text-sm truncate hover:underline text-media-white-1">{`${index +
        1}. ${name || title}`}</div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-media-white-3">
          {release_date?.substring(0, 4) || first_air_date?.substring(0, 4)}
        </span>
        {vote_count ? (
          <div className="flex items-center text-xs text-media-white-2">
            <FaStar className="mr-1" />
            <span>{parseFloat(vote_average).toFixed(1)}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
};

export default MediaItem;
