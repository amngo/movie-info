import React, { useContext, useEffect, useState } from 'react';
import { getMovie } from '../../api';
import { MovieContext } from '../../context/movie-context';
import Cast from '../Cast';
import Label from '../Label';
import Loader from '../Loader/Loader';
import Movies from '../Movies';

const Movie = ({ match }) => {
  const [movie, setMovie] = useState();
  const { setMovieImage } = useContext(MovieContext);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovie(match.params.id);
      setMovie(data);

      if (data.backdrops[0]) setMovieImage(data.backdrops[0].file_path);
    };
    getData();

    return () => {
      setMovieImage(null);
      setMovie(null);
    };
  }, [match.params.id, setMovieImage]);

  return movie ? (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="">
        <div className="flex items-center">
          <div className="inline-block px-4 py-2 mr-2 font-bold border border-white rounded">
            {movie.certification}
          </div>
          <Label name={movie.release_date.substring(0, 4)} classes="mr-2" />
          <Label name={`${movie.runtime} min`} />
        </div>
        <h1 className="text-6xl">{movie.title}</h1>
        <p className="w-1/2 mb-4">{movie.overview}</p>
        <div className="text-sm">
          {movie.genres.map(genre => (
            <Label key={genre.name} name={genre.name} classes="mr-2" />
          ))}
        </div>
        <div className="flex items-center">
          <div className="text-3xl font-bold text-movie-blue">
            {movie.vote_average}
          </div>
          <div className="ml-2 text-sm">({movie.vote_count} votes)</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 m-4">
          {movie.cast.length !== 0 && (
            <div className="flex flex-col">
              <div className="flex items-end justify-between">
                <h2 className="ml-3 text-2xl">Cast</h2>
                <div className="mr-4 font-bold text-movie-blue">
                  See full cast
                </div>
              </div>
              <Cast cast={movie.cast} />
            </div>
          )}
        </div>
        <div className="w-1/2 m-4">
          {movie.similarMovies.length !== 0 && (
            <div className="flex flex-col">
              <div className="flex items-end justify-between">
                <h2 className="ml-3 text-2xl">Similar Movies</h2>
                <div className="mr-4 font-bold text-movie-blue">See more</div>
              </div>

              <Movies movies={movie.similarMovies} />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
