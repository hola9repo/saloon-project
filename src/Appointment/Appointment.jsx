import React from 'react'
import './Appointment.css';
 
export default function Appointment() {
  return (
    <>
    <div className="container_bg">
       
         <form action=" ">
          <div className="top_bag">
            <div className="apt_heading">
            <h1>
              Book An Appointment
            </h1>
            </div>
           
          </div>
         <div className="inner_ctr">
              <div className="innermost_ctr">
 
            <div className="text_space" id='one'>
                <input  className='input_one' type="text"  placeholder='Date' />
                <input  className='input_one'type="text" placeholder='Skin Tone' />
                <input  className='input_one'type="text" placeholder='Email' />
            </div>
 
            <div className="text_space" id='two'>
                <input  className='input_one'type="text" placeholder='Time' />
                <input  className='input_one'type="text" placeholder='Name' />
                <input  className='input_one'type="Number" placeholder='Phone' />
            </div>
 
            </div>
 
 
            <button className='btn_one'>BOOK NOW</button>
            </div>
           
 
 
 
         </form>
 
    </div>
    </>
  )
}