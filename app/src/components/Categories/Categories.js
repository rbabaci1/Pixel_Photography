import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllImages } from '../../actions';
import Select from './Select';
import SearchForm from './SearchForm';

function Categories({ fetchAllImages }) {
  const [order, setOrder] = useState('popular');

  return (
    <div className='categories'>
      <SearchForm />

      <p
        onClick={() => {
          setOrder('popular');

          fetchAllImages(
            'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&order=popular',
            0
          );
        }}
        className={order === 'popular' && 'active'}
      >
        Popular
      </p>

      <p
        onClick={() => {
          setOrder('latest');

          fetchAllImages(
            'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&order=latest',
            0
          );
        }}
        className={order === 'latest' && 'active'}
      >
        Latest
      </p>

      <Select />
    </div>
  );
}

export default connect(null, { fetchAllImages })(Categories);
