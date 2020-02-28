import { getMovie } from 'api';
import moviePlaceholder from 'assets/img/movie_placeholder.png';
import { MediaContext } from 'context/media-context';
import React, { useContext, useEffect, useState } from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import Label from '../Label';
import Loader from '../Loader/Loader';
import MediaList from '../MediaList';
import Person from '../Person';
import SocialMedia from '../SocialMedia';

const Movie = ({ match }) => {
  const [play, setPlay] = useState(false);
  const [movie, setMovie] = useState();
  const { mapping } = useContext(MediaContext);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovie(match.params.id);
      setMovie(data);
    };
    getData();

    return () => {
      setMovie(null);
    };
  }, [match.params.id]);

  return movie ? (
    <div className='flex flex-col justify-between w-full h-full' data-testid='movie'>
      <div className='flex flex-col h-full'>
        <div
          className=''
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%), url(${movie.backdrops[0] &&
              `https://image.tmdb.org/t/p/original${movie.backdrops[0].file_path}`}) no-repeat center fixed`,
            backgroundSize: 'cover',
            height: '60vh'
          }}
        >
          <ReactPlayer className={play ? '' : 'hidden'} url={`https://www.youtube.com/watch?v=${movie.trailer}-U`} width='100%' height='100%' controls={true} playing={play} />
          <div className={`flex flex-col justify-between w-full h-full p-8 text-white ${play ? 'hidden' : ''}`}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between text-xs'>
                <span className='flex items-center'>
                  <FaStar className='text-3xl' />
                  <span className='mx-2 text-xl'>{movie.vote_average}</span>
                </span>
                <span className='text-gray-400'>({movie.vote_count} votes)</span>
              </div>
              <SocialMedia social={movie.social} />
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='flex items-center'>
                  <h1 className='text-4xl'>{movie.title}</h1>
                  <span className='ml-2 text-xl text-gray-600'>{`(${movie.release_date?.substring(0, 4)})`}</span>
                </div>
                {movie.genres.length !== 0 && (
                  <div className='mb-2 text-sm'>
                    {movie.genres.map(genre => (
                      <Label key={genre.name} name={genre.name} classes='mr-1' />
                    ))}
                  </div>
                )}
              </div>
              {movie.trailer && (
                <button className='flex items-center' onClick={() => setPlay(true)}>
                  <FaPlay />
                  <span className='ml-2'>Play Trailer</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <div className='flex mb-8'>
          <div className='flex items-start w-2/3'>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : moviePlaceholder} alt='' className='object-contain w-56' />
            <div className='flex flex-col px-8'>
              <h3 className='mb-2 text-xl'>Overview</h3>
              <p className='text-sm'>{movie.overview}</p>
            </div>
          </div>
          <div className='flex flex-col w-1/3 p-8 bg-movie-dark'>
            <h3 className='mb-2 text-xl'>Information</h3>
            <div className='flex flex-wrap justify-between h-full'>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Runtime</h4>
                <span className='text-sm'>{movie.runtime !== 0 ? `${movie.runtime} min` : 'unknown'}</span>
              </div>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Release Date</h4>
                <span className='text-sm'>{movie.release_date}</span>
              </div>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Original Language</h4>
                <span className='text-sm'>{mapping.languages[movie.original_language]}</span>
              </div>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Director</h4>
                <span className='text-sm'>
                  {movie.crew
                    .filter(person => person.job === 'Director')
                    .map(person => person.name)
                    .join(', ')}
                </span>
              </div>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Budget</h4>
                <span className='text-sm'>{movie.budget !== 0 ? `$${movie.budget.toLocaleString()}` : 'unknown'}</span>
              </div>
              <div className='flex flex-col w-1/2 p-2'>
                <h4 className='text-xs text-gray-600 uppercase'>Revenue</h4>
                <span className='text-sm'>{movie.revenue !== 0 ? `$${movie.revenue.toLocaleString()}` : 'unknown'}</span>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <h4 className='my-2 text-xs text-gray-600 uppercase'>Keywords</h4>
              <span className='text-xs'>
                {movie.keywords.map(keyword => (
                  <Label key={keyword.name} name={keyword.name} classes='mr-1 mb-1' />
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className='flex mb-8'>
          <div className='w-1/2'>
            {movie.cast.length !== 0 && (
              <div className='flex flex-col'>
                <h2 className='mb-4 text-xl'>Crew ({movie.crew.length})</h2>
                <div className='flex flex-wrap'>
                  {movie.crew.slice(0, 8).map((person, index) => (
                    <Person key={index} id={person.id} role={person.job} name={person.name} profile_path={person.profile_path} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='w-1/2'>
            {movie.cast.length !== 0 && (
              <div className='flex flex-col'>
                <h2 className='mb-4 text-xl'>Cast ({movie.cast.length})</h2>
                <div className='flex flex-wrap'>
                  {movie.cast.slice(0, 8).map((person, index) => (
                    <Person key={index} id={person.id} role={person.character} name={person.name} profile_path={person.profile_path} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='w-full mb-8'>
          {movie.recommendations.total_results !== 0 && (
            <div className='flex flex-col'>
              <h2 className='mb-4 text-xl'>Recommendations ({movie.recommendations.total_results})</h2>
              <MediaList media={movie.recommendations.results.slice(0, 5)} mediaType='movie' />
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
