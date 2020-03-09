import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MovieContainer } from 'screens/Movie';
import { TvContainer } from 'screens/Tv';
import { PersonContainer } from 'screens/Person';
import { ResultsContainer } from 'screens/Results';

const Body = () => {
  return (
    <div className="w-full h-full overflow-y-auto" id="body" data-testid="body">
      <Switch>
        <Route
          path="/movie/discover"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="discover/movie"
              mediaType="movie"
            />
          )}
        />
        <Route
          path="/movie/popular"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="movie/popular"
              mediaType="movie"
            />
          )}
        />
        <Route
          path="/movie/top-rated"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="movie/top_rated"
              mediaType="movie"
            />
          )}
        />
        <Route
          path="/movie/upcoming"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="movie/upcoming"
              mediaType="movie"
            />
          )}
        />
        <Route
          path="/movie/now-playing"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="movie/now_playing"
              mediaType="movie"
            />
          )}
        />
        <Route
          path="/tv/discover"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="discover/tv"
              mediaType="tv"
            />
          )}
        />
        <Route
          path="/tv/popular"
          render={props => (
            <ResultsContainer {...props} endpoint="tv/popular" mediaType="tv" />
          )}
        />
        <Route
          path="/tv/top-rated"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="tv/top_rated"
              mediaType="tv"
            />
          )}
        />
        <Route
          path="/tv/on-air"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="tv/on_the_air"
              mediaType="tv"
            />
          )}
        />
        <Route
          path="/tv/airing-today"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="tv/airing_today"
              mediaType="tv"
            />
          )}
        />
        <Route
          path="/person/popular"
          render={props => (
            <ResultsContainer
              {...props}
              endpoint="person/popular"
              mediaType="person"
            />
          )}
        />
        <Route
          path="/search"
          render={props => <ResultsContainer {...props} />}
        />
        <Route exact path="/movie/:id" component={MovieContainer} />
        <Route path="/tv/:id" component={TvContainer} />
        <Route path="/person/:id" component={PersonContainer} />
        <Redirect exact from="/tv" to="/tv/discover" />
        <Redirect from="/person" to="/person/popular" />
        <Redirect from="/" to="/movie/discover" />
      </Switch>
    </div>
  );
};

export default Body;
