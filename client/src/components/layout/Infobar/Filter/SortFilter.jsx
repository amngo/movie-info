import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import { SORT_OPTIONS, styles } from 'data';
import queryString from 'query-string';

const SortFilter = ({ location: { pathname, search }, history }) => {
  const [order, setOrder] = useState(SORT_OPTIONS[1]);
  useEffect(() => {
    const params = queryString.parse(search);
    params['sort_by'] = order.value;
    history.push(`${pathname}?${queryString.stringify(params)}`);
  }, [order, history, pathname, search]);
  return (
    <div className='flex items-center'>
      <span className='mr-2 text-xs font-bold uppercase text-media-white-3'>Sort by</span>
      <Select options={SORT_OPTIONS} value={order} onChange={option => setOrder(option)} styles={styles('225px')} components={{ IndicatorSeparator: () => null }} />
    </div>
  );
};

export default withRouter(SortFilter);
