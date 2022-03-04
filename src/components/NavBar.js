import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar-wrapper'>
        <div className='logo'>
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '16px' }}>BeeFriends</Link>
        </div>
        <div className='menu'>
            <Link to={'/authcontent'} style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>Menu</Link>
        </div>
    </div>
  )
}
