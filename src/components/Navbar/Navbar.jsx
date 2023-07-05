import React from 'react'
import './NavBar.css'



function Navbar() {
  return (
    <>
      <div className='menu'>
        <h2>Gretta</h2>
        
        <div className="middlemenu">
          <button>Projects</button>
          <button>Process</button>
          <button>About</button>
        </div>

        <button>Get in touch</button>
      </div>
    </>
  )
}

export default Navbar