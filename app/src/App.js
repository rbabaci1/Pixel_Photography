import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';
import LoadingButton from './LoadingButton/LoadingButton';

function App({ fetchAllPictures, loading }) {
  return (
    <div className='App'>
      <Header />

      <div className='show-all'>
        <LoadingButton onClick={fetchAllPictures} loading={loading} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllPictures })(App);
