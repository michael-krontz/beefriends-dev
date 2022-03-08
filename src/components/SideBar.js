import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";

export default function Navigation() {
  return (
    <Menu>
        <div className='navigation-logo' style={{ textDecoration: 'none', fontSize: '23px', marginBottom: '20px' }}>BeeFriends</div>
        <div className='bee-line-break'></div>
        <div className="menu-item">
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>About Us</Link>
        </div>

        <div className="menu-item">
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Conservation</Link>
        </div>

        <div className="menu-item">
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Blog</Link>
        </div>

        <div className="menu-item">
            <Link to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Contact Us</Link>
        </div>

        <div className="menu-item">
            <Link to={'/authcontent'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Apiarist Login</Link>
        </div>
    </Menu>
  )
}
