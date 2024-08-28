import React from 'react'
import './Contact.css';
import { ReactComponent as Phone } from './assets/cell.svg'
import { ReactComponent as Mail } from './assets/mail.svg'
import { ReactComponent as Send } from './assets/send.svg'
import Appointment from '../Appointment/Appointment';

function Contact() {
  return (
    <>
    <div className='contact-container'>
      <section className="contact-banner">
        <h2 className='contact-us'>
          Contact Us
        </h2>
        <h1 className='get-in-touch'>
          Get In Touch
        </h1>
      </section>

      <section className="contact-link-divs">
        <div className="linking-divs">
          <div className="linking-divs-icon">
            <Phone />
          </div>
          <h3>Email</h3>
          <p className='linking-para'>contact@trimbar.com</p>
        </div>
        <div className="linking-divs">
          <div className="linking-divs-icon">
            <Mail />
          </div>
          <h3>Phone</h3>
          <p className='linking-para'>+88 0123 456 789</p>
        </div>
        <div className="linking-divs">
          <div className="linking-divs-icon">
            <Send />
          </div>
          <h3>Address</h3>
          <p>62,74th Avenue-galendale NY 11385 , US</p>
        </div>
      </section>
    </div>
    <Appointment/>
    </>
  )
}

export default Contact