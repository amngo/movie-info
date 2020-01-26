import React from 'react';
import actorPlaceholder from '../assets/img/actor_placeholder.png';

const Actor = ({ actor: { id, name, profile_path } }) => {
  profile_path = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : actorPlaceholder;
  return (
    <div className="flex flex-col w-1/5 p-4 cursor-pointer hover:bg-movie-dark">
      <img src={profile_path} alt={name} className="mb-2" />
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default Actor;
