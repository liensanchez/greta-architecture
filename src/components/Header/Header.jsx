import React, { useState, useEffect  } from 'react'
import './Header.css'
import image1 from '../../assets/Project A - Image 5.png'
import image2 from '../../assets/Project A - Image 6.png'
import image3 from '../../assets/Project A - Image 7.png'
import image4 from '../../assets/Project A - Image 8.png'
import image5 from '../../assets/Project A - Image 9.png'
import image6 from '../../assets/Project A - Image 10.png'
import { BsArrowUpRight } from "react-icons/bs";


function Header({credit}) {

  const imgCarousel= [image1, image2, image3, image4, image5, image6]

  const [imgShow, setImgShow] = useState(imgCarousel[3])

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = imgCarousel.indexOf(imgShow);
      const nextIndex = (currentIndex + 1) % imgCarousel.length;
      setImgShow(imgCarousel[nextIndex]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [imgCarousel, imgShow]);
  
  return (
    <div className='headerDisplay'>
  
      <div className='imgDisplay'>
        <img src={imgShow} alt="" className='shadowImg'/>
        <img src={imgShow} alt="" className='primaryImg'/>
        <img src={imgShow} alt="" className='shadowImg'/>
      </div>

      <div className='headerContent'>

        <div className="headerRight">
          <h2>MADE BETTER</h2>
          <h2>WITH GRETTA</h2>
          <button className='buttonCallToAction' onClick={() => credit()}>View our Work <BsArrowUpRight/></button>
        </div>

        <div className="headerLeft">
          <h2>Our work in images:</h2>
          {imgCarousel.map((img, index) => (
            <button key={index} onClick={() => setImgShow(img)} className='buttonCarouselSelector'>
              <img src={imgCarousel[index]} alt="" className='imgCarouselSelector'/>
            </button>
          ))}
        </div>


      </div>


    </div>
  )
}

export default Header