import React, { useState } from "react";
import './Header.css'
import { ReactComponent as SearchIcon } from './assets/svg/search.svg';
import { ReactComponent as UserIcon } from './assets/svg/profile.svg';
import { Link } from "react-router-dom";
// import {useNavigate} from 'react-router-dom'

function Header() {
  let [isProfile, setIsProfile] = useState(false)
  // const navigate = useNavigate();
  // const gotologinpage = () =>{
  // navigate('./User/LoginForm/LoginForm')

  // }
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <img className="brand-logo" src={require('./assets/logo.jpg')} alt="" />
        <div className="search-wrapper">
          <input type="text" name="" id="" placeholder="Search" />
          <button><SearchIcon /></button>
        </div>
        <button onClick={() => { setIsProfile(!isProfile) }} className="vertical-dots"><UserIcon /></button>
        <div className={`${isProfile ? 'profile-wrapper show-profile-wrapper' : 'profile-wrapper'}`}>
       
          {/* <button onClick={() => gotologinpage()}>Login</button> */}
          <Link  to='/login'>
            <button >Login</button>
          </Link>
          <Link  to='/signup'>
            <button>Signup</button>
          </Link> 
        </div> 
      </div>
    </div>
  )
}

export default Header;