import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return (
    <button className="p-2 hover:bg-movie-dark" onClick={() => history.go(-1)}>
      <FaTimes />
    </button>
  );
};

export default withRouter(BackButton);
