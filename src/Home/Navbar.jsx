import React, { useState } from 'react'
import './Navbar.css';
import { ReactComponent as HamBurgerIcon } from './assets/svg/hamburger-icon.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  let [isClicked, setIsClicked] = useState(false);
  return (
    <div className='navbar-container'>
      <div className="navbar-wrapper">
        <button onClick={()=>{setIsClicked(!isClicked)}} className='hamburger-icon-btn'><HamBurgerIcon /></button>
        <ul className={`${isClicked?'nav-links nav-links-left show-left-nav-links':'nav-links nav-links-left'}`}>
          <Link to='/home' className="links">Home</Link>
          <Link to= '/about' className="links">About Us</Link>
          <Link to='/services' className="links">Services</Link>
          <Link to='/product' className="links">Products</Link>
          <Link to='/gallery' className="links">Gallery</Link>
          <Link to='/contact' className="links">Contact</Link>
        </ul>
        <ul className="nav-links nav-links-right">
          <Link to='/business' className="links">For Business</Link>
          <Link to='/postad' className="links">Post Ads</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar 