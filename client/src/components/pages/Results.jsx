import queryString from 'query-string';
import React, { useContext, useEffect } from 'react';
import { getMedia, searchMulti } from 'api';
import { MediaContext } from 'context';
import Loader from '../Loader/Loader';
import MediaList from '../MediaList';

const Results = ({ location: { search: searchString }, endpoint, mediaType }) => {
  const { media, setMedia } = useContext(MediaContext);
  useEffect(() => {
    const params = queryString.parse(searchString);
    params.page = params.page ? parseInt(params.page) : 1;
    const page = params.page;
    const getData = async () => {
      let data;
      params.page = params.page * 2 - 1;
      if (endpoint) data = await getMedia(endpoint, params);
      else data = await searchMulti(params.q, params.page);

      const { results, total_results, total_pages, dates } = data;
      setMedia({
        items: results,
        totalResults: total_results,
        totalPages: Math.floor(total_pages / 2),
        currentPage: page,
        dates
      });
    };
    getData();

    return () => {
      setMedia({
        items: null,
        totalPages: null,
        currentPage: null,
        totalResults: null,
        dates: null
      });
    };
  }, [searchString, setMedia, endpoint]);

  return media.items ? (
    <div className='px-8 pt-4 pb-8'>
      <MediaList media={media.items} currentPage={media.currentPage} mediaType={mediaType} />
    </div>
  ) : (
    <Loader />
  );
};

export default Results;
