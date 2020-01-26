import React from 'react';

const Label = ({ name, classes }) => {
  return (
    <div className={`inline-block px-4 py-1 text-xs font-bold border border-white rounded ${classes}`}>
      {name}
    </div>
  );
};

export default Label;
