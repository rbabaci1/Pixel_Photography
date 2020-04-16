import React from 'react';
import LoadingButton from './LoadingButton/LoadingButton';

function Home({ history }) {
  return (
    <div className='home'>
      <div className='show-all'>
        <LoadingButton history={history} />
      </div>
    </div>
  );
}

export default Home;
