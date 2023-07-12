import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Showcase from './components/Showcase/Showcase'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import React, {useState} from 'react'
import { BsLinkedin, BsXLg, BsGithub } from "react-icons/bs";

function App() {

  const [notifications, setNotifications] = useState(false)

  function credit() {
    notifications ? setNotifications(false) : setNotifications(true)
  }


  return (
    <>
      {notifications && 
        <div className='notificationContainer'>
          <div className='notificationContent'>
            <h2>This is not a real website it was made by</h2>
            <a href="https://www.linkedin.com/in/liensanchez/" target='blank'>Lien Silvio Sanchez</a>
            <div className='notificationRRSS'>
              <a href="https://www.linkedin.com/in/liensanchez/" target='blank'><button className='buttonFooter'><BsLinkedin/></button></a>
              <a href="https://github.com/liensanchez" target='blank'><button className='buttonFooter'><BsGithub/></button></a>
            </div>
            <h2>From a Template made for Relume Design Leguage by:</h2>
            <a href="https://www.linkedin.com/in/niccolomiranda/" target='blank'>Niccolo Miranda</a>
            <a href="https://www.linkedin.com/in/niccolomiranda/" target='blank'><button className='buttonFooter'><BsLinkedin/></button></a>
            <button onClick={() => credit()} className='notificationClose'><BsXLg/></button>
          </div>
        </div>
        }
      <Navbar credit={credit}/>
      <Header credit={credit}/>
      <Experience />
      <Showcase />
      <Portfolio credit={credit}/>
      <Team/>
      <Footer credit={credit}/>
    </>
  )
}

export default App
