import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages } from '../actions';

function Categories({ fetchAllImages }) {
  return (
    <div className='categories'>
      <p
        onClick={() =>
          fetchAllImages(
            'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&order=popular',
            0
          )
        }
      >
        Popular
      </p>
      <p
        onClick={() =>
          fetchAllImages(
            'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&order=latest',
            0
          )
        }
      >
        Latest
      </p>
    </div>
  );
}

export default connect(null, { fetchAllImages })(Categories);
