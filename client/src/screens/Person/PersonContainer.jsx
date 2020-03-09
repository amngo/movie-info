import React, { useEffect, useState } from 'react';
import { getPerson } from 'api';
import { Loader } from 'components/Loader';
import Person from './Person';

const PersonContainer = ({ match }) => {
  const [person, setPerson] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await getPerson(match.params.id);
      setPerson(data);
      console.log(data);
    };
    getData();
  }, [match.params.id]);

  return person ? <Person person={person} /> : <Loader />;
};

export default PersonContainer;
