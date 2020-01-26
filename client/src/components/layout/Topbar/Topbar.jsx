import React, { useContext } from 'react';
import { MovieContext } from '../../../context/movie-context';
import BackButton from './BackButton';
import Pagination from './Pagination';
import Searchbar from './Searchbar';

const Topbar = () => {
  const { movies } = useContext(MovieContext);
  console.log('topbar rendered');
  return (
    <div className="flex flex-col px-8 py-4">
      <div className="flex items-center justify-between">
        <Searchbar />
        {movies.items && <Pagination />}
        {!movies.items && <BackButton />}
      </div>
    </div>
  );
};

export default Topbar;
