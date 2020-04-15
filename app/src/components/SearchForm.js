import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterImages } from '../actions';

function SearchForm({ filterImages }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    filterImages(searchTerm);
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

export default connect(null, { filterImages })(SearchForm);
