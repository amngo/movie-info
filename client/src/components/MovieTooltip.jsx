import React from 'react';
import { GENRE_MAP } from '../api';

const MovieTooltip = ({
  movie: { title, overview, genre_ids, release_date }
}) => {
  const genres = genre_ids.map(genre => GENRE_MAP[genre]);
  release_date = release_date.substring(0, 4);
  return (
    <div className="flex flex-col" style={{ width: '20rem' }}>
      <div className="font-bold">
        {title}
        <span className="font-normal"> ({release_date})</span>
      </div>
      <div className="mb-2 text-xs">{genres.join(', ')}</div>
      <p>{overview}</p>
    </div>
  );
};

export default MovieTooltip;
