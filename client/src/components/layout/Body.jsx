import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movie from '../pages/Movie';
import Person from '../pages/Person';
import Results from '../pages/Results';
import Tv from '../pages/Tv';

const Body = () => {
  return (
    <div className='w-full h-full overflow-y-auto' id='body' data-testid='body'>
      <Switch>
        <Route path='/movie/discover' render={props => <Results {...props} endpoint='discover/movie' mediaType='movie' />} />
        <Route path='/movie/popular' render={props => <Results {...props} endpoint='movie/popular' mediaType='movie' />} />
        <Route path='/movie/top-rated' render={props => <Results {...props} endpoint='movie/top_rated' mediaType='movie' />} />
        <Route path='/movie/upcoming' render={props => <Results {...props} endpoint='movie/upcoming' mediaType='movie' />} />
        <Route path='/movie/now-playing' render={props => <Results {...props} endpoint='movie/now_playing' mediaType='movie' />} />
        <Route path='/tv/discover' render={props => <Results {...props} endpoint='discover/tv' mediaType='tv' />} />
        <Route path='/tv/popular' render={props => <Results {...props} endpoint='tv/popular' mediaType='tv' />} />
        <Route path='/tv/top-rated' render={props => <Results {...props} endpoint='tv/top_rated' mediaType='tv' />} />
        <Route path='/tv/on-air' render={props => <Results {...props} endpoint='tv/on_the_air' mediaType='tv' />} />
        <Route path='/tv/airing-today' render={props => <Results {...props} endpoint='tv/airing_today' mediaType='tv' />} />
        <Route path='/person/popular' render={props => <Results {...props} endpoint='person/popular' mediaType='person' />} />
        <Route path='/search' render={props => <Results {...props} />} />
        <Route exact path='/movie/:id' component={Movie} />
        <Route path='/tv/:id' component={Tv} />
        <Route path='/person/:id' component={Person} />
        <Redirect exact from='/tv' to='/tv/discover' />
        <Redirect from='/person' to='/person/popular' />
        <Redirect from='/' to='/movie/discover' />
      </Switch>
    </div>
  );
};

export default Body;
