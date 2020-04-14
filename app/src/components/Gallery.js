import React from 'react';
import { connect } from 'react-redux';

function Gallery({ pictures, error }) {
  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <div className='gallery'></div>
  );
}

const mapStateToProps = ({ pictures, error }) => ({ pictures, error });

export default connect(mapStateToProps)(Gallery);
