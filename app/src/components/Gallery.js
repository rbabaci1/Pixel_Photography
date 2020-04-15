import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ImageCard from './ImageCard';
import SearchForm from './SearchForm';

function Gallery({ images, error }) {
  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <>
      <SearchForm />

      <div className='gallery'>
        {images.map((image) => (
          <ImageCard key={image.id} imageUrl={image.largeImageURL} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ images, error }) => ({ images, error });

export default connect(mapStateToProps)(Gallery);
