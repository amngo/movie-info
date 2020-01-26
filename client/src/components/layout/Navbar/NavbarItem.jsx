import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ item: { icon, url, name } }) => {
  return (
    <NavLink
      to={url}
      exact
      activeClassName="border-movie-blue text-movie-blue"
      className="flex items-center px-6 py-2 text-sm border-l-4 border-transparent hover:text-movie-blue hover:border-movie-blue"
    >
      {icon}
      <div className="ml-4">{name}</div>
    </NavLink>
  );
};

export default NavbarItem;
