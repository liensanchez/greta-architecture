import React from 'react'
import './NavBar.css'



function Navbar() {
  return (
    <>
      <div className='menu'>
        <h2>Gretta</h2>
        
        <div className="middleMenu">
          <button className="buttonMiddleMenu">Projects</button>
          <button className="buttonMiddleMenu">Process</button>
          <button className="buttonMiddleMenu">About</button>
        </div>

        <button className='buttonCallToAction'>Get in touch</button>
      </div>
    </>
  )
}

export default Navbar