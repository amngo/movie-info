import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

const Searchbar = ({ history }) => {
  const [query, setQuery] = useState('');
  return (
    <div className="flex items-center w-5/6 text-xl">
      <FaSearch />
      <input
        className="w-full p-2 ml-4 bg-transparent border-none appearance-none"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={event =>
          event.key === 'Enter' ? history.push(`/search?q=${query}`) : null
        }
      />
    </div>
  );
};

export default withRouter(Searchbar);
