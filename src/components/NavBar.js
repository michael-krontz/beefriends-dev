import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar-wrapper'>
        <div className='nav-logo'>
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '16px' }}>BeeFriends</Link>
        </div>
    </div>
  )
}
