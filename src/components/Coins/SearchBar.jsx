import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Notify parent component of the search term
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Cryptocurrency (Eg. Bitcoin)"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
