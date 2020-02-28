import React, { useContext } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { MediaContext } from 'context';
const ReleaseInfo = () => {
  const {
    media: { dates }
  } = useContext(MediaContext);

  return (
    <div className='flex items-center justify-center px-6 py-2' style={{ backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.4)' }}>
      <div className='flex items-center'>
        <FaCalendarAlt className='text-lg' />
        <span className='ml-2'>{dates?.minimum.substring(5)}</span>
      </div>
      <span className='mx-4'>-</span>
      <div className='flex items-center'>
        <FaCalendarAlt className='text-lg' />
        <span className='ml-2'>{dates?.maximum.substring(5)}</span>
      </div>
    </div>
  );
};

export default ReleaseInfo;
