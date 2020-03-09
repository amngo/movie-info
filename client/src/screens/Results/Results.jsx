import React from 'react';
import { MediaList } from 'components/MediaList';
import { Pagination } from 'layout';

const Results = ({ media, mediaType }) => {
  return (
    <div>
      <div className="px-8 pt-4 pb-8">
        <MediaList
          media={media.items}
          currentPage={media.currentPage}
          mediaType={mediaType}
        />
      </div>
      <Pagination />
    </div>
  );
};

export default Results;
