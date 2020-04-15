import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPictures } from '../actions';
import LoadingButton from '../LoadingButton/LoadingButton';
import Gallery from '../components/Gallery';

function Home({ loading, fetchAllPictures }) {
  return (
    <div className='home'>
      <div className='show-all'>
        <LoadingButton onClick={fetchAllPictures} loading={loading} />
      </div>

      <Gallery />
    </div>
  );
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllPictures })(Home);
