import React from 'react'
import { Link } from 'react-router-dom'
import beeLogoSmall from '../images/beefriends-logo-small@2x.png'

export default function NavBar() {
  return (
    <div className='navbar-wrapper'>
        <div className='nav-logo'>
            <Link to={'/'}>
              <img src={beeLogoSmall} alt="Logo" width="125" height="100%" className='bee-logo-small'></img>            
            </Link>
        </div>
    </div>
  )
}
