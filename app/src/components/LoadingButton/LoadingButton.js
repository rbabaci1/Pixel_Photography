import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './LineProgress';
import { Link } from 'react-router-dom';

const LoadingButton = ({ loading, onClick, history }) => {
  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      history.push('/gallery');
    }, 2000);
  };

  return (
    <React.Fragment>
      {loading && <ColoredLinearProgress />}

      <Link to='/' onClick={handleClick}>
        <Button variant='contained' disabled={loading} onClick={onClick}>
          {loading && <CircularProgress size={14} />}
          {!loading && 'Show All'}
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default LoadingButton;
