import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import { styles, YEAR_OPTIONS } from 'data';

const YearFilter = ({ location: { pathname, search }, history }) => {
  const { year: parsedYear } = queryString.parse(search);
  const found = YEAR_OPTIONS.find(option => option.value === parseInt(parsedYear));
  const [year, setYear] = useState(found || YEAR_OPTIONS[0]);

  useEffect(() => {
    const params = queryString.parse(search);
    params['year'] = year.value;
    if (!params['year']) delete params['year'];
    history.push(`${pathname}?${queryString.stringify(params)}`);
  }, [year, history, pathname, search]);

  return (
    <div className='flex items-center'>
      <span className='mr-2 text-xs font-bold uppercase text-media-white-3'>Year</span>
      <Select options={YEAR_OPTIONS} onChange={option => setYear(option)} value={year} styles={styles('100px')} components={{ IndicatorSeparator: () => null }} />
    </div>
  );
};

export default withRouter(YearFilter);
