import queryString from 'query-string';
import React, { useContext, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { MovieContext } from '../../../context/movie-context';

const Pagination = ({ history, location: { pathname, search } }) => {
  const [page, setPage] = useState();

  const {
    movies: { totalPages, currentPage, totalResults }
  } = useContext(MovieContext);

  const { q } = queryString.parse(search);

  const prev = () => {
    if (currentPage > 1) {
      history.push(`${pathname}?${q ? `q=${q}&` : ''}page=${currentPage - 1}`);
    }
  };

  const next = () => {
    if (currentPage < totalPages) {
      history.push(`${pathname}?${q ? `q=${q}&` : ''}page=${currentPage + 1}`);
    }
  };

  return (
    <div className="flex items-center text-xl">
      <div className="w-1/3 mr-2 text-xs text-right">
        ( {totalResults} results )
      </div>
      <div className="flex items-center justify-end w-2/3 text-xl">
        <button
          disabled={currentPage === 1}
          className="p-2 hover:bg-movie-dark"
          onClick={() => prev()}
        >
          <FaAngleLeft />
        </button>
        <div className="flex items-center justify-center m-2 text-sm">
          <input
            type="text"
            className="w-1/3 px-2 py-1 mr-2 text-center bg-movie-dark"
            placeholder={currentPage}
            maxLength='3'
            onChange={e => setPage(e.target.value)}
            onKeyPress={event =>
              event.key === 'Enter'
                ? history.push(`${pathname}?${q ? `q=${q}&` : ''}page=${page}`)
                : null
            }
          />

          <div>of {totalPages}</div>
        </div>
        <button
          disabled={currentPage === totalPages}
          className="p-2 hover:bg-movie-dark"
          onClick={() => next()}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default withRouter(Pagination);
