import React from 'react';
import Actor from './Actor';

const Cast = ({ cast }) => {
  const castPortion = cast.slice(0, 5);
  return (
    <div className="flex">
      {castPortion.map(actor => (
        <Actor key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default Cast;
