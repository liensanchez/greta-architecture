import React from 'react'
import './NavBar.css'
import { BsArrowUpRight } from "react-icons/bs";

function Navbar({credit}) {


  return (

    <div className='menu'>
      <h2>Gretta</h2>
        
      <div className="middleMenu">
        <button className="buttonMiddleMenu">Projects</button>
        <button className="buttonMiddleMenu">Process</button>
        <button className="buttonMiddleMenu">About</button>
      </div>

      <button className='buttonCallToAction' onClick={() => credit()}>Get in touch <BsArrowUpRight/> </button>
    </div>
  )
}

export default Navbar