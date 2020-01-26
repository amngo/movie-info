import React from 'react';

const Actor = ({ actor: { id, name, profile_path } }) => {
  return (
    <div className="flex flex-col w-1/5 p-4 cursor-pointer hover:bg-movie-dark">
      <img
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt={name}
        className="mb-2"
      />
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default Actor;
