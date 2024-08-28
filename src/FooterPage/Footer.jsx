import React from 'react';
import './Footer.css';
import { ReactComponent as Home } from './assets/home.svg'
import { ReactComponent as Mail } from './assets/mail.svg'
import { ReactComponent as Phone } from './assets/phone.svg'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-wrapper">

        {/* about company */}
        <div className="social-wrapper footer-wrapper-child">
          <h3 className="discriptive-title">ABOUT COMPANY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
          </p>
          <div className="social-links">
            <a href=" ">
              <img className='link-img' src={require('./assets/fb.png')} alt="" />
            </a><a href=" ">
              <img className='link-img' src={require('./assets/ig.png')} alt="" />
            </a>
            <a href=" ">
              <img className='link-img' src={require('./assets/pinterest.png')} alt="" />
            </a>
            <a href=" ">
              <img className='link-img' src={require('./assets/twitter.png')} alt="" />
            </a>
          </div>
        </div>

        {/* address wrapper */}
        <div className="address-wrapper footer-wrapper-child">
          <h3 className="discriptive-title">SEARCH SOMETHING</h3>
          <input className='search-input' placeholder='Search something..' type="text" name="" id="" />

          <div className="contacts">
            <Home />
            <p>Banglore-585105</p>
          </div>
          <div className="contacts">
            <Mail />
            <p>contact@example.com</p>
          </div>
          <div className="contacts">
            <Phone />
            <p>+ 91 1234567890</p>
          </div>
        </div>

        {/* opening hours */}
        <div className="timings-wrapper footer-wrapper-child">
          <h3 className="discriptive-title">OPENING HOURS</h3>
          <div className='timing-wrapper'>
            <span className="days-wrapper">Mon-Thus</span>
            <span className="time-wrapper">8am-9pm</span>
          </div>
          <div className='timing-wrapper'>
            <span className="days-wrapper">Fri-Sat</span>
            <span className="time-wrapper">8am-1pm</span>
          </div>
          <div className='timing-wrapper'>
            <span className="days-wrapper">Sunday</span>
            <span className="time-wrapper">9am-10am</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer