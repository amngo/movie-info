import React from 'react';
import { Link } from 'react-router-dom';
import actorPlaceholder from 'assets/img/actor_placeholder.png';

const Person = ({ id, role, name, profile_path }) => {
  profile_path = profile_path ? `https://image.tmdb.org/t/p/original${profile_path}` : actorPlaceholder;
  return (
    <Link to={`/person/${id}`} className='flex items-center w-1/2 p-4 cursor-pointer hover:bg-movie-dark'>
      <img src={profile_path} alt={name} className='object-cover w-12 h-12 mb-2 mr-4 rounded-full' />
      <div className='flex flex-col w-full'>
        <div className='text-sm font-bold'>{name}</div>
        <div className='text-xs text-gray-500'>{role}</div>
      </div>
    </Link>
  );
};

export default Person;
