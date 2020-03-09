import React from 'react';
import { withRouter } from 'react-router-dom';
import { Filter } from './components/Filter';
import { ReleaseInfo } from './components/ReleaseInfo';

const Infobar = ({ location: { pathname } }) => {
  if (pathname === '/movie/discover' || pathname === '/tv/discover')
    return <Filter />;
  else if (pathname === '/movie/now-playing') return <ReleaseInfo />;
  else return <div></div>;
};

export default withRouter(Infobar);
