import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ImageCard from './ImageCard';
import SearchForm from './SearchForm';

function Gallery({ images, error }) {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState([...images]);

  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <>
      <SearchForm setCurrentlyDisplayed={setCurrentlyDisplayed} />

      <div className='gallery'>
        {currentlyDisplayed.map((image) => (
          <ImageCard key={image.id} imageUrl={image.largeImageURL} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ images, error }) => ({ images, error });

export default connect(mapStateToProps)(Gallery);
