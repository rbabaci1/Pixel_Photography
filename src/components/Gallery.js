import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Categories from './Categories/Categories';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function Gallery({ images, error }) {
  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <>
      <Categories />
      <DoubleArrowIcon id='arrow-icon' onClick={() => window.scrollTo(0, 0)} />

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
