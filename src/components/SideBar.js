import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
    const [isMenuOpen, handleMenu] = useState(false);
    const handleCloseMenu = () => {
      handleMenu(false);
    };
    const handleStateChange = (state) => {
      handleMenu(state.isOpen);
    };

  return (
    <Menu width={ 250 } pageWrapId={"page-wrap"} isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <div className='navigation-logo' style={{ textDecoration: 'none', fontSize: '23px', marginBottom: '20px' }}>BeeFriends</div>
        <div className='bee-line-break'></div>
        <div className="menu-item">
            <Link onClick={() => handleCloseMenu()} to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>About Us</Link>
        </div>

        <div className="menu-item">
            <Link onClick={() => handleCloseMenu()} to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Conservation</Link>
        </div>

        <div className="menu-item">
            <Link onClick={() => handleCloseMenu()} to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Blog</Link>
        </div>

        <div className="menu-item">
            <Link onClick={() => handleCloseMenu()} to={'/'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }}>Contact Us</Link>
        </div>

        <div className="menu-item">
            <Link onClick={() => handleCloseMenu()} to={'/authcontent'} style={{ textDecoration: 'none', color: '#FFD15A', fontSize: '18px' }} >Apiarist Login</Link>
        </div>
    </Menu>

  )
}

export default Navbar;
