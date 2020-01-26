import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Movie from '../../pages/Movie';
import Results from '../../pages/Results';

const Body = () => {
  return (
    <div className="w-full h-full px-8 pb-8 overflow-y-auto" id="body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/popular"
          render={props => <Results {...props} endpoint="/movie/popular" />}
        />
        <Route
          path="/top-rated"
          render={props => <Results {...props} endpoint="/movie/top_rated" />}
        />
        <Route
          path="/upcoming"
          render={props => <Results {...props} endpoint="/movie/upcoming" />}
        />
        <Route
          path="/now-playing"
          render={props => <Results {...props} endpoint="/movie/now_playing" />}
        />
        <Route path="/search" render={props => <Results {...props} />} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </div>
  );
};

export default Body;
