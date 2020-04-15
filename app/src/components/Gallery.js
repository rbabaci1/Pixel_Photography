import React from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import ImageCard from './ImageCard';
import SearchForm from './SearchForm';

function Gallery({ displayedImages, error }) {
  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <>
      <SearchForm />

      <div className='gallery'>
        {displayedImages.map((image) => (
          <ImageCard key={image.id} imageUrl={image.largeImageURL} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ displayedImages, error }) => ({
  displayedImages,
  error,
});

export default connect(mapStateToProps)(Gallery);
