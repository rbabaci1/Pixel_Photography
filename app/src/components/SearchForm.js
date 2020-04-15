import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchImages } from '../actions';

function SearchForm({ setCurrentlyDisplayed, images }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const filteredImages = images.filter((image) =>
      image.tags.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCurrentlyDisplayed(filteredImages);
  }, [searchTerm]);

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

const mapStateToProps = ({ images }) => ({ images });

export default connect(mapStateToProps)(SearchForm);
