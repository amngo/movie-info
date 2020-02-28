import React from 'react';
import { animated, useTrail } from 'react-spring';
import MediaItem from './MediaItem';

const config = { mass: 1, tension: 7000, friction: 300 };

const MediaList = ({ media, mediaType, currentPage }) => {
  const trail = useTrail(media.length, {
    config,
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 }
  });

  return (
    <div className='flex flex-wrap'>
      {trail.map(({ x, ...otherProps }, i) => (
        <animated.div
          key={i}
          style={{
            ...otherProps,
            transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
          }}
          className='w-1/2 p-4 cursor-pointer md:w-1/4 lg:w-1/5 xl:w-1/8 hover:bg-item-dark'
          data-tip
          data-for={media[i].id}
        >
          <MediaItem index={i + (currentPage - 1) * 40} media={media[i]} mediaType={mediaType} />
        </animated.div>
      ))}
    </div>
  );
};

export default MediaList;
