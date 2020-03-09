import React, { useContext } from 'react';
import tvPlaceholder from 'assets/img/actor_placeholder.png';
import { MediaContext } from 'context/media-context';
import { Label } from 'components/Label';
import { MediaList } from 'components/MediaList';
import { Person } from 'components/Person';

const Tv = ({ tv }) => {
  const { mapping } = useContext(MediaContext);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col h-full">
        <div
          className="flex flex-col justify-between w-full p-12 text-white"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%), url(${tv
              .backdrops[0] &&
              `https://image.tmdb.org/t/p/original${tv.backdrops[0].file_path}`}) no-repeat top center fixed`,
            backgroundSize: 'cover',
            height: '100vh'
          }}
        >
          <div className="flex">
            <div className="flex flex-col items-center h-auto rounded-lg">
              <img
                src={
                  tv.poster_path
                    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                    : tvPlaceholder
                }
                alt=""
                style={{ minWidth: '16rem', maxWidth: '16rem' }}
              />
              <button className="inline-block px-4 py-2 mt-4 text-lg font-bold border rounded cursor-pointer bg-movie-blue border-movie-blue">
                Play Trailer
              </button>
            </div>
            <div className="flex w-5/6 ml-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Label name={tv.certification} classes="text-lg" />
                    <h1 className="ml-4 text-4xl font-bold">{tv.name}</h1>
                  </div>
                  {tv.genres.length !== 0 && (
                    <div className="mb-2 text-sm">
                      {tv.genres.map(genre => (
                        <Label
                          key={genre.name}
                          name={genre.name}
                          classes="m-1"
                        />
                      ))}
                    </div>
                  )}
                  <div className="">
                    <h2 className="mb-1 text-lg">Overview</h2>
                    <div className="w-5/6">{tv.overview}</div>
                  </div>
                </div>
                <div>
                  {tv.keywords.length !== 0 && (
                    <div>
                      <h2 className="text-lg">Keywords</h2>
                      <div className="text-sm">
                        {tv.keywords.map(keyword => (
                          <Label
                            key={keyword.name}
                            name={keyword.name}
                            classes="m-1"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full px-8">
            <div>
              <div className="text-lg font-bold">Original Language</div>
              <div className="">{mapping.languages[tv.original_language]}</div>
            </div>
            <div>
              <div className="text-lg font-bold">Episode Runtime</div>
              <div className="">{tv.episode_run_time[0]} min</div>
            </div>
            <div>
              <div className="text-lg font-bold">Total Episodes</div>
              <div className="">{tv.number_of_episodes}</div>
            </div>
            <div>
              <div className="text-lg font-bold">Total Seasons</div>
              <div className="">{tv.number_of_seasons}</div>
            </div>
            <div>
              <div className="text-lg font-bold">Status</div>
              <div className="">{tv.status}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-8">
        <div className="flex mb-8">
          <div className="w-1/2">
            {tv.cast.length !== 0 && (
              <div className="flex flex-col">
                <h2 className="mb-4 text-xl">Crew ({tv.crew.length})</h2>
                <div className="flex flex-wrap">
                  {tv.crew.slice(0, 8).map((person, index) => (
                    <Person
                      key={index}
                      id={person.id}
                      role={person.job}
                      name={person.name}
                      profile_path={person.profile_path}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-1/2">
            {tv.cast.length !== 0 && (
              <div className="flex flex-col">
                <h2 className="mb-4 text-xl">Cast ({tv.cast.length})</h2>
                <div className="flex flex-wrap">
                  {tv.cast.slice(0, 8).map((person, index) => (
                    <Person
                      key={index}
                      id={person.id}
                      role={person.character}
                      name={person.name}
                      profile_path={person.profile_path}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full mb-8">
          {tv.similarMovies.total_results !== 0 && (
            <div className="flex flex-col">
              <h2 className="mb-4 text-xl">
                Similar Shows ({tv.similarMovies.total_results})
              </h2>
              <MediaList
                media={tv.similarMovies.results.slice(0, 5)}
                mediaType="tv"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tv;
