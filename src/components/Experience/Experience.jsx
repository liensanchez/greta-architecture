import React from 'react'
import img from '../../assets/Mystery Item A.png'
import'./Experience.css'

function Experience() {
  return (
    <div className='experienceContainer'>
      <img src={img} alt=""  className='decorImg'/>
      <h2> With over 20 years of architectural practise experience, we combine spatial, expressive, and technical skills to deliver efficient buildings of lasting value.</h2>
    </div>
  )
}

export default Experience