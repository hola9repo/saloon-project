import React from 'react'
import './Nomatch.css'
import { Link } from 'react-router-dom'

const Nomatch = () => {
  return (
    <>
      <div className='nomatchmaincontainer'>
        <div className='oopsnumber'>
            <p>404</p>
        </div>
        <div className='nomatchcontent'>
                Oops! page could not be found
        </div>
        <div className='nomatchbutton'>
            <Link to='/'>
                <button>home</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Nomatch