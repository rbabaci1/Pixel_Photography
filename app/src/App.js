import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';
import LoadingButton from './LoadingButton/LoadingButton';

function App({ fetchAllPictures }) {
  return (
    <div className='App'>
      <Header />

      <div className='show-all'>
        <LoadingButton onClick={fetchAllPictures} loading={false} />
      </div>
    </div>
  );
}

export default connect(null, { fetchAllPictures })(App);
