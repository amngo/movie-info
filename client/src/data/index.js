import React from 'react';
import { FaCalendarAlt, FaCalendarCheck, FaFireAlt, FaStar, FaTv } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import { MdTheaters } from 'react-icons/md';

export const YEAR_OPTIONS = [{ value: null, label: 'All' }];
for (let i = 0; i < 121; i++) {
  YEAR_OPTIONS.push({ value: 2020 - i, label: 2020 - i });
}

export const SORT_OPTIONS = [
  { value: 'popularity.asc', label: 'Popularity ascending' },
  { value: 'popularity.desc', label: 'Popularity descending' },
  { value: 'release_date.asc', label: 'Release date ascending' },
  { value: 'release_date.desc', label: 'Release date descending' },
  { value: 'revenue.asc', label: 'Revenue ascending' },
  { value: 'revenue.desc', label: 'Revenue descending' },
  { value: 'original_title.asc', label: 'Title ascending' },
  { value: 'original_title.desc', label: 'Title descending' },
  { value: 'vote_average.asc', label: 'Ratings ascending' },
  { value: 'vote_average.desc', label: 'Ratings descending' },
  { value: 'vote_count.asc', label: 'Vote count ascending' },
  { value: 'vote_count.desc', label: 'Vote count descending' }
];

export const MOVIE_NAV_ITEMS = [
  { icon: <FiGrid />, url: '/movie/discover', name: 'Discover' },
  { icon: <FaFireAlt />, url: '/movie/popular', name: 'Popular' },
  { icon: <FaStar />, url: '/movie/top-rated', name: 'Top Rated' },
  { icon: <FaCalendarAlt />, url: '/movie/upcoming', name: 'Upcoming' },
  { icon: <MdTheaters />, url: '/movie/now-playing', name: 'Now Playing' }
];

export const TV_NAV_ITEMS = [
  { icon: <FiGrid />, url: '/tv/discover', name: 'Discover' },
  { icon: <FaFireAlt />, url: '/tv/popular', name: 'Popular' },
  { icon: <FaStar />, url: '/tv/top-rated', name: 'Top Rated' },
  { icon: <FaTv />, url: '/tv/on-air', name: 'On TV' },
  { icon: <FaCalendarCheck />, url: '/tv/airing-today', name: 'Airing Today' }
];

export const styles = width => ({
  option: base => ({
    ...base,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.6)',
      cursor: 'pointer'
    }
  }),
  container: base => ({
    ...base,
    width
  }),
  control: base => ({
    ...base,
    backgroundColor: 'rgba(0,0,0,0.2)',
    border: 0,
    boxShadow: 'none'
  }),
  singleValue: base => ({
    ...base,
    color: 'white'
  }),
  input: base => ({
    ...base,
    color: 'white'
  }),
  menu: base => ({
    ...base,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: 0
  }),
  menuList: base => ({
    ...base,
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar': {
      width: '0.6rem',
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#17161b'
    }
  }),
  multiValueLabel: base => ({
    ...base,
    backgroundColor: 'transparent',
    color: 'white'
  }),
  multiValueRemove: base => ({
    ...base,
    backgroundColor: 'transparent'
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: 'rgba(0,0,0,0.5)'
  })
});
