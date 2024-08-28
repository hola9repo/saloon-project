import React from 'react'
import './HeroPage.css'

function HeroPage() {
  return (
    <div className='heropage-container'>
      <div className="heropage-wrapper">
        <div className="hero-left">
          <div id="text-to-animate">
            <span className='style-animation-span'>G</span>
            <span className='style-animation-span'>L</span>
            <span className='style-animation-span'>O</span>
            <span className='style-animation-span'>W</span>
            <span className='style-animation-span'>U</span>
            <span className='style-animation-span'>P</span>
            <span className='style-animation-span' id="dot">.</span>
          </div>
          <div className="shifting-text-wrapper">
            <div className="quotes qwitcher-grypen-bold">Fall in Love with Your Reflection.</div>
            <div className="quotes qwitcher-grypen-bold">If you don’t look good, we don’t look good.</div>
            <div className="quotes qwitcher-grypen-bold">Life is too short to have boring hair.</div>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>
    </div>
  )
}

export default HeroPage