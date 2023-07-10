import React from 'react'
import img1 from '../../assets/Project A - Image 1.png'
import img2 from '../../assets/Project A - Image 3.png'
import img3 from '../../assets/Project A - Image 6.png'
import img4 from '../../assets/Project A - Image 10.png'


function Showcase() {
  return (
    <div>
      <div>
        <img src={img1} alt="" />
        <h2>Outside View</h2>
      </div>
      <div>
        <img src={img2} alt="" />
        <h2>Living Room</h2>
      </div>
      <div>
        <img src={img4} alt="" />
        <h2>Kitchen</h2>
      </div>
      <div>
        <img src={img3} alt="" />
        <h2>Bathroom</h2>
      </div>
    </div>
  )
}

export default Showcase