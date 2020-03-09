import React from 'react';
import Searchbar from './Searchbar';

const Topbar = () => {
  return (
    <div className='flex w-full px-6 py-2' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <Searchbar />
    </div>
  );
};

export default Topbar;
