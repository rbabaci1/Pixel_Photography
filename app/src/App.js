import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';
import LoadingButton from './LoadingButton/LoadingButton';

function App({ test, fetchAllPictures }) {
  return (
    <div className='App'>
      <Header />

      <div className='show-all'>
        <button onClick={fetchAllPictures}>Show All</button>
      </div>

      <LoadingButton />
    </div>
  );
}

export default connect(null, { fetchAllPictures })(App);
