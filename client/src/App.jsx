import React, { useContext } from 'react';
import Body from './components/layout/Body/Body';
import Navbar from './components/layout/Navbar/Navbar';
import Topbar from './components/layout/Topbar/Topbar';
import { MovieContext } from './context/movie-context';

const App = () => {
  const { movieImage } = useContext(MovieContext);

  const style = {
    background: `url(https://image.tmdb.org/t/p/original${movieImage}) no-repeat center center fixed`,
    backgroundSize: 'cover'
  };

  return (
    <div className="flex w-full h-screen">
      <Navbar />
      <div className="w-full h-full" style={movieImage ? style : {}}>
        <div
          className="flex flex-col w-full h-full"
          style={{ backgroundColor: 'rgba(23,22,27,0.50)' }}
        >
          <Topbar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
