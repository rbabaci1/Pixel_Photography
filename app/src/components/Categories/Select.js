import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fetchAllImages } from '../../actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 110,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SimpleSelect({ fetchAllImages }) {
  const classes = useStyles();
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchAllImages(
      `https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&category=${category}`,
      0
    );
  }, [category, fetchAllImages]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='demo-simple-select-helper-label'>Category</InputLabel>

      <Select value={category} onChange={handleChange}>
        <MenuItem disabled>Select a category</MenuItem>
        <MenuItem value='backgrounds'>Backgrounds</MenuItem>
        <MenuItem value='fashion'>Fashion</MenuItem>
        <MenuItem value='nature'>Nature</MenuItem>
        <MenuItem value='science'>Science</MenuItem>
        <MenuItem value='education'>Education</MenuItem>
        <MenuItem value='feelings'>Feelings</MenuItem>
        <MenuItem value='health'>Health</MenuItem>
        <MenuItem value='people'>People</MenuItem>
        <MenuItem value='religion'>Religion</MenuItem>
        <MenuItem value='places'>Places</MenuItem>
        <MenuItem value='animals'>Animals</MenuItem>
        <MenuItem value='industry'>Industry</MenuItem>
        <MenuItem value='computer'>Computer</MenuItem>
        <MenuItem value='food'>Food</MenuItem>
        <MenuItem value='sports'>Sports</MenuItem>
        <MenuItem value='transportation'>Transportation</MenuItem>
        <MenuItem value='travel'>Travel</MenuItem>
        <MenuItem value='buildings'>Buildings</MenuItem>
        <MenuItem value='business'>Business</MenuItem>
        <MenuItem value='music'>Music</MenuItem>
      </Select>
    </FormControl>
  );
}

export default connect(null, { fetchAllImages })(SimpleSelect);
