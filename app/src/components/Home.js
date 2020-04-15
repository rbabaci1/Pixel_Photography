import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages } from '../actions';
import LoadingButton from '../LoadingButton/LoadingButton';

function Home({ loading, fetchAllImages, history }) {
  return (
    <div className='home'>
      <div className='show-all'>
        <LoadingButton
          onClick={() =>
            fetchAllImages(
              'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1'
            )
          }
          loading={loading}
          history={history}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllImages })(Home);
