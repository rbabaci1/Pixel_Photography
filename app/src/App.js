import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';
import LoadingButton from './LoadingButton/LoadingButton';

function App({ fetchAllPictures }) {
  const [test, set] = useState(true);

  setTimeout(() => {
    set(false);
  }, 3000);
  return (
    <div className='App'>
      <Header />

      <div className='show-all'>
        <LoadingButton onClick={fetchAllPictures} loading={test} />
      </div>
    </div>
  );
}

export default connect(null, { fetchAllPictures })(App);
