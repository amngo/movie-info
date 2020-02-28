import React, { createContext, useState } from 'react';

export const MediaContext = createContext();
export const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState({
    items: null,
    totalPages: null,
    currentPage: null,
    totalResults: null
  });

  const [mapping, setMapping] = useState();
  const [movieGenreFilter, setMovieGenreFilter] = useState();

  return (
    <MediaContext.Provider
      value={{
        media,
        setMedia,
        mapping,
        setMapping,
        movieGenreFilter,
        setMovieGenreFilter
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
