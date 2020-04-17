import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <Header />

      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
    </div>
  );
}

export default App;
