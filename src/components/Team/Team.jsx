import React from 'react'
import './Team.css'
import img1 from '../../assets/Team Member 1.png'
import img2 from '../../assets/Team Member 2.png'
import img3 from '../../assets/Team Member 3.png'
import img4 from '../../assets/Mystery Item A.png'



function Team() {

  const teamInfo = [
    {name:"Giorgia Gucci", job:"Principal Architect", img:img1},
    {name:"Antonio Margheritti", job:"Architect", img:img2},
    {name:"Lisa Louis", job:"Interior Designer", img:img3},
  ]


  return (
    <div className='teamContainer'>
      <img src={img4} alt=""  className='teamPattern'/>
      <h2 className='teamTitle'>Our A-team</h2>

      <div className='teamInfo'>
      {teamInfo.map((item) => (
              <div className='teamInfoIndividual' key='index'>
                <img src={item.img} alt="" className='teamMemberImg'/>
                <h2>{item.name}</h2>
                <h3>{item.job}</h3>
              </div>
          ))}
      </div>

    </div>
  )
}

export default Team