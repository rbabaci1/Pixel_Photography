import React from 'react';
import { connect } from 'react-redux';
import { filterImages } from '../actions';

function SearchForm({ searchTerm, filterImages }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <label>
        {'🔍'}
        <input type='text' />
      </label>
    </form>
  );
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });

export default connect(mapStateToProps, { filterImages })(SearchForm);
