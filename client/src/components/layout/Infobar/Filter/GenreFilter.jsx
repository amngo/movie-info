import { MediaContext } from 'context';
import { styles } from 'data';
import queryString from 'query-string';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const GenreFilter = ({ history, location: { pathname, search } }) => {
  const {
    mapping: { movieGenreFilter, tvGenreFilter }
  } = useContext(MediaContext);
  const genreFilter = pathname === '/movie/discover' ? movieGenreFilter : tvGenreFilter;
  const [selectedOptions, setSelectedOptions] = useState();

  useEffect(() => {
    const params = queryString.parse(search);
    const genres = selectedOptions?.map(genre => genre.value);
    params['with_genres'] = genres?.join(',');
    if (!params['with_genres']) delete params['with_genres'];
    history.push(`${pathname}?${queryString.stringify(params)}`);
  }, [pathname, selectedOptions, history, search]);

  return (
    <div className='flex items-center'>
      <span className='mr-2 text-xs font-bold uppercase text-media-white-3'>Genres</span>
      <Select
        options={genreFilter}
        styles={styles('500px')}
        value={selectedOptions}
        onChange={options => setSelectedOptions(options)}
        isMulti
        placeholder='Filter by genres'
        components={{ ...animatedComponents }}
      />
    </div>
  );
};

export default withRouter(GenreFilter);
