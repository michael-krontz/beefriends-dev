import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const menuIcon = <FontAwesomeIcon icon={faBars} />

export default function NavBar() {
  return (
    <div className='navbar-wrapper'>
        <div className='nav-logo'>
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '16px' }}>BeeFriends</Link>
        </div>
    </div>
  )
}
