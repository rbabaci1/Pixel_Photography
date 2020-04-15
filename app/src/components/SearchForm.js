import React from 'react';
import { connect } from 'react-redux';

function SearchForm({ searchTerm }) {
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

export default connect(mapStateToProps)(SearchForm);
