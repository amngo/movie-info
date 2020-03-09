import React from 'react';
import { FaFireAlt } from 'react-icons/fa';
import { MOVIE_NAV_ITEMS, TV_NAV_ITEMS } from 'data';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav data-testid='navbar' className='flex flex-col h-full py-4 pl-4 text-white' style={{ minWidth: '200px', backgroundColor: 'rgba(0,0,0,0.6)', boxShadow: '2px 0px 3px 0px rgba(0,0,0,0.2)' }}>
      <div className='mb-8'>
        <h1 className='mb-2 text-xs font-bold uppercase text-media-white-4'>Movies</h1>
        {MOVIE_NAV_ITEMS.map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}
      </div>
      <div className='mb-8'>
        <h1 className='mb-2 text-xs font-bold uppercase text-media-white-4'>TV Shows</h1>
        {TV_NAV_ITEMS.map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}
      </div>
      <div className='mb-8'>
        <h1 className='mb-2 text-xs font-bold uppercase text-media-white-4'>People</h1>
        <NavbarItem item={{ icon: <FaFireAlt />, url: '/person/popular', name: 'Popular' }} />
      </div>
    </nav>
  );
};

export default Navbar;
