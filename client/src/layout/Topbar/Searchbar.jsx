import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { searchMulti } from 'api';
import personPlaceholder from 'assets/img/actor_placeholder.png';
import moviePlaceholder from 'assets/img/movie_placeholder.png';
import tvPlaceholder from 'assets/img/tv_placeholder.png';

const loadOptions = async inputValue => {
  const data = await searchMulti(inputValue);
  return data.results.slice(0, 4).map(media => ({
    value: media.id,
    label: media.title || media.name,
    type: media.media_type,
    image: media.poster_path || media.profile_path
  }));
};

const formatOptionLabel = props => {
  let image;
  if (!props.image) {
    if (props.type === 'movie') image = moviePlaceholder;
    else if (props.type === 'tv') image = tvPlaceholder;
    else image = personPlaceholder;
  }

  return (
    <div className="flex items-center">
      <img
        src={
          props.image ? `https://image.tmdb.org/t/p/w500${props.image}` : image
        }
        alt=""
        className="w-8 mr-2"
      />
      <span className="ml-2">{props.label}</span>
    </div>
  );
};

const customStyles = {
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
    width: '100%'
  }),
  control: base => ({
    ...base,
    backgroundColor: 'transparent',
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
  })
};

const Searchbar = ({ history }) => {
  const handleChange = option => {
    if (option) history.push(`/${option.type}/${option.value}`);
  };

  return (
    <div className="flex items-center w-full">
      <FaSearch className="mr-4" />
      <AsyncSelect
        onChange={handleChange}
        loadOptions={loadOptions}
        isClearable={true}
        cacheOptions
        value={null}
        formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        noOptionsMessage={() => 'No results'}
        placeholder="Search for movies, tv shows, people..."
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }}
      />
    </div>
  );
};

export default withRouter(Searchbar);
