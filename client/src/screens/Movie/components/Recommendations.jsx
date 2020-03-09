import React from 'react';
import { MediaList } from 'components/MediaList';

const Recommendations = ({ movie }) => {
  return (
    <div className="w-full mb-8">
      {movie.recommendations.total_results !== 0 && (
        <div className="flex flex-col">
          <h2 className="mb-4 text-xl">
            Recommendations ({movie.recommendations.total_results})
          </h2>
          <MediaList
            media={movie.recommendations.results.slice(0, 5)}
            mediaType="movie"
          />
        </div>
      )}
    </div>
  );
};

export default Recommendations;
