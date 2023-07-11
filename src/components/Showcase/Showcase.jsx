import React, { useState } from 'react'
import './Showcase.css'
import outsideImg from '../../assets/Project A - Image 1.png'
import livingroomImg from '../../assets/Project A - Image 3.png'
import bathroomImg from '../../assets/Project A - Image 6.png'
import kitchenImg from '../../assets/Project A - Image 10.png'


function Showcase() {

  const imgShowcaseCarousel = [
    { img: outsideImg, name: "OutSide View" },
    { img: livingroomImg, name: "Livingroom" },
    { img: bathroomImg, name: "Bathroom" },
    { img: kitchenImg, name: "Kitchen" },
  ]

  const [imgShowcase, setImgShowcase] = useState(imgShowcaseCarousel[0].img)

  return (
    <div className='showcaseContainer'>
      <div className="showcaseCarousel">
      {imgShowcaseCarousel.map((item, index) => (
            <button key={index} onClick={() => setImgShowcase(item.img)} className='showcaseCarouselButton'>
              <div className='showcaseCarouselButtonOrder'>
                <img src={item.img} alt="" className='showcaseCarouselImg'/>
                <h2> {item.name}</h2>
              </div>
            </button>
          ))}
      </div>


      <div>
        <img src={imgShowcase} alt="" className='showcaseImg' />
      </div>
    </div>
  )
}

export default Showcase