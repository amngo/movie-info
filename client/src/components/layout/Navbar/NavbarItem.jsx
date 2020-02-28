import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ item: { icon, url, name } }) => {
  return (
    <NavLink
      to={url}
      data-testid={url}
      activeClassName='font-bold text-media-blue border-media-blue'
      className='flex items-center py-2 border-r-4 border-transparent text-media-white-3 hover:border-media-blue'
    >
      {icon}
      <span className='ml-3 text-xs'>{name}</span>
    </NavLink>
  );
};

export default NavbarItem;
