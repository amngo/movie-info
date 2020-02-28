import React, { useContext, useEffect } from 'react';
import { getLanguages, getMovieGenres, getTvGenres } from './api';
import Body from './components/layout/Body';
import Infobar from './components/layout/Infobar/Infobar';
import { Navbar } from './components/layout/Navbar';
import Pagination from './components/layout/Pagination';
import Topbar from './components/layout/Topbar/Topbar';
import Loader from './components/Loader/Loader';
import { MediaContext } from './context';
import { genreToFilter } from './helpers';

const App = () => {
  const { setMapping, mapping } = useContext(MediaContext);

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const [languages, movieGenres, tvGenres] = await Promise.all([getLanguages(), getMovieGenres(), getTvGenres()]);
      if (mounted) setMapping({ languages, movieGenres, tvGenres, movieGenreFilter: genreToFilter(movieGenres), tvGenreFilter: genreToFilter(tvGenres) });
    };

    getData();

    return () => {
      mounted = false;
    };
  }, [setMapping]);

  return mapping ? (
    <div className='flex h-screen tracking-wide' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} data-testid='app'>
      <div className='flex'>
        <Navbar />
      </div>
      <div className='flex flex-col w-full h-full'>
        <Topbar />
        <div className='flex flex-col justify-between h-full overflow-y-hidden'>
          <Infobar />
          <Body />
          <Pagination />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default App;
