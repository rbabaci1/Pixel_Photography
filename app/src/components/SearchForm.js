import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllImages } from '../actions';

function SearchForm({ fetchAllImages }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchAllImages(
      `https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&q=${searchTerm}`
    );
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'🔍'}
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
    </form>
  );
}

export default connect(null, { fetchAllImages })(SearchForm);
