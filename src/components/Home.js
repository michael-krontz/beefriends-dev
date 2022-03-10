import React from 'react'
import beeIcon from '../images/bee-icon.png'
import LocateButton from './LocateButton'
import Box from '@mui/material/Box';


export default function Home() {
  return (
    <div className='home-content-wrapper'>
        <div className='logo-wrapper'>
            <div className='logo'>
                <img src={beeIcon} alt="Logo" className='bee-icon'></img>
            </div>
        <div className='tag-wrapper'>
            <h3 className='tagline'>Beefriend a Local Apiarist</h3>
            <p className='sub-tagline'>(Beekeeper)</p>
        </div>
      </div>

      <div className='locate-card'>
        <Box component="form" autoComplete="off">
         <LocateButton></LocateButton>
        </Box>
      </div>
    </div>
  )
}
