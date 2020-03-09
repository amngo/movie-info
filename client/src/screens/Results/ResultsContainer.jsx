import queryString from 'query-string';
import React, { useContext, useEffect } from 'react';
import { getMedia, searchMulti } from 'api';
import { MediaContext } from 'context';
import { Loader } from 'components/Loader';
import Results from './Results';

const ResultsContainer = ({
  location: { search: searchString },
  endpoint,
  mediaType
}) => {
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
    <Results media={media} mediaType={mediaType} />
  ) : (
    <Loader />
  );
};

export default ResultsContainer;
