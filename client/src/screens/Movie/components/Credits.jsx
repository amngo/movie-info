import React from 'react';
import { Person } from 'components/Person';

const Credits = ({ movie: { cast, crew } }) => {
  return (
    <div className="flex mb-8">
      <div className="w-1/2">
        {cast.length !== 0 && (
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl">Crew ({crew.length})</h2>
            <div className="flex flex-wrap">
              {crew.slice(0, 8).map((person, index) => (
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
        {cast.length !== 0 && (
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl">Cast ({cast.length})</h2>
            <div className="flex flex-wrap">
              {cast.slice(0, 8).map((person, index) => (
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
  );
};

export default Credits;
