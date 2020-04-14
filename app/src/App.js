import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';

function App({ test, fetchAllPictures }) {
  return (
    <div className='App'>
      <h1>Pixels Photography</h1>

      <button onClick={fetchAllPictures} style={{ fontSize: '26px' }}>
        Test store
      </button>

      {test && <h2>Store connected. {test}</h2>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

export default connect(mapStateToProps, { fetchAllPictures })(App);
