import { Button, Box } from '@mui/material'
import React from 'react';
import "./Header.css";
import Navigation from '../Navigation/Navigation';


const Header = () => {
  return (
    <Box className='layout'>
      <div className='header'>
      <div>
        Sledge Hub
      </div>
      <div className='menu'>
        <span>Tearms and Condition</span>
        <span>Privacy Policy</span>
        <span>
            <Button className='button' variant='contained'>Raise Ticket</Button>
        </span>
      </div>
      </div>
      <Navigation />
    </Box>
  )
}

export default Header;

