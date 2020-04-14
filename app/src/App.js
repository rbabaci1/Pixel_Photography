import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';
import LoadingButton from './LoadingButton/LoadingButton';
import Gallery from './components/Gallery';

function App({ fetchAllPictures, loading, error }) {
  return (
    <div className='App'>
      <Header />

      <div className='show-all'>
        <LoadingButton onClick={fetchAllPictures} loading={loading} />
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

const mapStateToProps = ({ loading, error }) => ({ loading, error });

export default connect(mapStateToProps, { fetchAllPictures })(App);
