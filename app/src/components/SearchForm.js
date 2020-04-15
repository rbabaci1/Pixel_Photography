import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchImage } from '../actions';

function SearchForm({ storedImages, searchImage }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const filteredImages = storedImages.filter((image) =>
      image.tags.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchImage(filteredImages);
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

const mapStateToProps = ({ storedImages }) => ({ storedImages });

export default connect(mapStateToProps, { searchImage })(SearchForm);
