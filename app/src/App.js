import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />

      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
