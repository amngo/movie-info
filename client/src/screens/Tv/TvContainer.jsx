import React, { useEffect, useState } from 'react';
import { getTv } from 'api';
import { Loader } from 'components/Loader';
import Tv from './Tv';

const TvContainer = ({ match }) => {
  const [tv, setTv] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await getTv(match.params.id);
      setTv(data);
      console.log(data);
    };
    getData();

    return () => {
      setTv(null);
    };
  }, [match.params.id]);

  return tv ? <Tv tv={tv} /> : <Loader />;
};

export default TvContainer;
