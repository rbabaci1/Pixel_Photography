import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-helper-label'>Category</InputLabel>

        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={category}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>

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
    </div>
  );
}
