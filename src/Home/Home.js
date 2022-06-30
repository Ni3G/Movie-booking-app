import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Home.css';
import Movies from './movies';


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: 'rgb(34,37,57)'}} position="static">
        <Toolbar>
          <Typography style={{color: 'white'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Upcoming Movies
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='container'>
        <Movies />
      </div>
      
      
    </Box>
  );
}