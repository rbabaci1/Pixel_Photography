import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

class ColoredLinearProgress extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <LinearProgress
          {...this.props}
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary,
          }}
        />
        <LinearProgress
          {...this.props}
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary,
          }}
        />
      </>
    );
  }
}

const styles = {
  colorPrimary: {
    backgroundColor: '#e54433',
  },
  barColorPrimary: {
    backgroundColor: '#47e570',
  },
};

export default withStyles(styles)(ColoredLinearProgress);
