import TextField from '@mui/material/TextField';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './Practice.css';
import './ActorData'
import artists from './ActorData';
import MultipleSelectGenres from './Card/Card';
import SelectDate from './Card/Date';
import BasicButton from './Card/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MultipleSelectCheckmarks(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">{props.name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {artists.map((artist) => (
            <MenuItem key={artist.id} value={(artist.first_name)}  >
              <Checkbox checked={personName.indexOf(artist.first_name) > -1} />
              <ListItemText primary={(artist.first_name) + (artist.last_name)} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}



export default function ApplyForm(){
    return (
        <div className='form'>
            <TextField id="standard-basic" label="Movie Name" variant="standard" />
            <MultipleSelectGenres name="Genres" />
            <MultipleSelectCheckmarks name="Artists" />
            <SelectDate />
            <BasicButton/>
        </div>
    )
}