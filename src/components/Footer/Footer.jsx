import React from 'react'
import './Footer.css'
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";





function Footer({credit}) {
  return (
    <div className='footerContainer'>

      <div className='leftFooter'>
        <h2>Gretta</h2>
      </div>

      <div className='middleFooter'>
        <h3>2023 Gretta. All rights reserved</h3>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
      </div>

      <div className='rigtFooter'>
        <button className='buttonFooter'  onClick={() => credit()}><BsFacebook/></button>
        <button className='buttonFooter'  onClick={() => credit()}><BsInstagram/></button>
        <button className='buttonFooter'  onClick={() => credit()}><BsTwitter/></button>
        <button className='buttonFooter'  onClick={() => credit()}><BsLinkedin/></button>
      </div>

    </div>
  )
}

export default Footer