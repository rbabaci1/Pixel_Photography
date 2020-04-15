import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from '../actions';
import LoadingButton from '../LoadingButton/LoadingButton';

function Home({ loading, fetchAllPictures, history }) {
  return (
    <div className='home'>
      <div className='show-all'>
        <LoadingButton
          onClick={fetchAllPictures}
          loading={loading}
          history={history}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllPictures })(Home);
