import React from 'react';
import actorPlaceholder from 'assets/img/actor_placeholder.png';

const Person = ({ person }) => {
  return (
    <div>
      <div className="flex p-8">
        <div className="flex flex-col items-start w-1/6">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                : actorPlaceholder
            }
            alt=""
          />
          <div className="flex justify-center w-full mt-4 text-4xl"></div>
        </div>
        <div className="w-4/6 ml-4">
          <h1 className="text-2xl">{person.name}</h1>
          <div className="text-sm">{person.biography}</div>
        </div>
        <div className="w-1/6"></div>
      </div>
    </div>
  );
};

export default Person;
