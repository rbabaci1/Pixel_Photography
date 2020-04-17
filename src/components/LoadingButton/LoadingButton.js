import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './LineProgress';
import { Link } from 'react-router-dom';
import { fetchAllImages } from '../../actions';

const LoadingButton = ({ fetchAllImages, loading, history }) => {
  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      history.push('/gallery');
    }, 1500);
  };

  return (
    <>
      {loading && <ColoredLinearProgress />}

      <Link to='/' onClick={handleClick}>
        <Button
          variant='contained'
          disabled={loading}
          onClick={() =>
            fetchAllImages(
              'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1',
              1500
            )
          }
        >
          {loading && <CircularProgress size={14} />}
          {!loading && 'Shop for free!'}
        </Button>
      </Link>
    </>
  );
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllImages })(
  withRouter(LoadingButton)
);
