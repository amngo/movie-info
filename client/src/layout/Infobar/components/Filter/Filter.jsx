import React from 'react';
import { GenreFilter, SortFilter, YearFilter } from '.';

const Filter = () => {
  return (
    <div className='flex flex-col items-center px-6 py-2 text-xs uppercase xl:flex-row' style={{ backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.4)' }}>
      <span className='mb-2 xl:mb-0 xl:mr-8'>
        <GenreFilter />
      </span>
      <span className='flex items-center justify-center w-full xl:justify-between'>
        <span className='mr-4 xl:mr-0'>
          <YearFilter />
        </span>

        <span className=''>
          <SortFilter />
        </span>
      </span>
    </div>
  );
};

export default Filter;
