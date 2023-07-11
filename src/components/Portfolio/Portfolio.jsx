import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/Dersert Image 4.png'
import img2 from '../../assets/City Image 3.png'
import { BsArrowUpRight } from "react-icons/bs";

function Portfolio() {
  return (
    <div className='portfolioContainer'>
      <div className='portfolioDisplay'>
        <div className="imageContainer">
          <img src={img1} alt="" />
        </div>
        <div className="portfolioText">
          <h2>Zion Villa</h2>
          <div className="portfolioDescription">
            <p>A luxury landscape Villa located in Zion, Utah. Currently under construction, the property is set to open in late 2024.</p>
          </div>
          <button className='buttonShowProject'>View Project <BsArrowUpRight/></button>
        </div>
      </div>

      <h2>OUR PORTFOLIO</h2>

      <div className='portfolioDisplay'>
        <div className="imageContainer">
          <img src={img2} alt="" />
        </div>
        <div className="portfolioText">
         <div className="content">
            <h2>De Beauvoir Townhouse</h2>
            <div className="portfolioDescription">
              <p>Effortless elegance and the client’s sense of style define this family home in Chelsea, London.</p>
            </div>
            <button className='buttonShowProject'>View Project <BsArrowUpRight/></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio