import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './LineProgress';

function ButtonComponent({ loading, onClick }) {
  return (
    <Button variant='contained' disabled={loading} onClick={onClick}>
      {loading && <CircularProgress size={14} />}
      {!loading && 'Show All'}
    </Button>
  );
}

const LoadingButton = ({ loading, onClick }) => {
  return (
    <React.Fragment>
      {loading && <ColoredLinearProgress />}

      <ButtonComponent loading={loading} onClick={onClick} />
    </React.Fragment>
  );
};

export default LoadingButton;
