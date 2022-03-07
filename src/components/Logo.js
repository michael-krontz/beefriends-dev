import React from 'react'
import beeIcon from '../images/bee-icon.png'

export default function Logo() {
  return (
      <div className='logo-wrapper'>
        <div className='logo'>
        <img src={beeIcon} alt="Logo" className='bee-icon'></img>
        </div>
        <div className='tag-wrapper'>
            <h3 className='tagline'>Beefriend a Local Apiarist</h3>
            <p className='sub-tagline'>(Beekeeper)</p>
        </div>
      </div>
  )
}
