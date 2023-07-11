import React from 'react'
import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";





function Footer() {
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
        <button className='buttonFooter'><BsFacebook/></button>
        <button className='buttonFooter'><BsInstagram/></button>
        <button className='buttonFooter'><BsTwitter/></button>
        <button className='buttonFooter'><BsLinkedin/></button>
      </div>

    </div>
  )
}

export default Footer