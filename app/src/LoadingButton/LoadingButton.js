import React from 'react';
import { render } from 'react-dom';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './LineProgress';

function ButtonComponent({ loading }) {
  return (
    <Button variant='contained' disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && 'Show All'}
    </Button>
  );
}

const LoadingButton = ({ loading }) => {
  return (
    <React.Fragment>
      {loading && <ColoredLinearProgress />}
      <br />
      <ButtonComponent loading={loading} />
    </React.Fragment>
  );
};

export default LoadingButton;

// class LoadingButton extends React.Component {
//   state = { loading: false };

//   onClick = () => {
//     this.setState({ loading: true });
//     setTimeout(() => this.setState({ loading: false }), 3000); //3 seconds
//   };

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.loading && <ColoredLinearProgress />}
//         <br />
//         <ButtonComponent onClick={this.onClick} loading={this.state.loading} />
//       </React.Fragment>
//     );
//   }
// }
