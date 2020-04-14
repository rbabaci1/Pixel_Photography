import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from './actions/actions';
import Header from './components/Header';

function App({ test, fetchAllPictures }) {
  return (
    <div className='App'>
      <Header />

      <button onClick={fetchAllPictures}>Show All</button>

      {test && <h2>Store connected. {test}</h2>}
    </div>
  );
}

export default App;
