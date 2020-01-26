import React from 'react';
import {
  FaMedal,
  FaRegCalendarAlt,
  FaRegCompass,
  FaRegStar
} from 'react-icons/fa';
import { MdTheaters } from 'react-icons/md';
import NavbarItem from './NavbarItem';

const MOVIES = [
  { icon: <FaRegCompass />, url: '/', name: 'Discover' },
  { icon: <FaRegStar />, url: '/popular', name: 'Popular' },
  { icon: <FaMedal />, url: '/top-rated', name: 'Top Rated' },
  { icon: <FaRegCalendarAlt />, url: '/upcoming', name: 'Upcoming' },
  { icon: <MdTheaters />, url: '/now-playing', name: 'Now Playing' }
];

const Navbar = () => {
  return (
    <nav className="flex flex-col w-1/6 py-12 bg-movie-dark">
      {MOVIES.map((item, index) => (
        <NavbarItem key={index} item={item} />
      ))}
    </nav>
  );
};

export default Navbar;
