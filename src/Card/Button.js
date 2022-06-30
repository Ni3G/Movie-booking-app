import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Date.css"

export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row">
        <div className='button-div'>
            <Button className='button' variant="contained">APPLY</Button>
        </div>
    </Stack>
  );
}