import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Showcase from './components/Showcase/Showcase'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import React, {useState} from 'react'

function App() {

  const [notifications, setNotifications] = useState(false)

  function credit() {
    notifications ? setNotifications(false) : setNotifications(true)
  }


  return (
    <>
      {notifications && 
        <div className='notification'>
          <h2>This is not a real website it was made by</h2>
          <a href="">Lien Silvio Sanchez</a>
          <h2>From a Template made for Relume Design Leguage by:</h2>
          <a href="https://www.linkedin.com/in/niccolomiranda/" target='blank'>Niccolo Miranda</a>
          <button onClick={() => credit()}>x</button>
        </div>
        }
      <Navbar credit={credit}/>
      <Header/>
      <Experience/>
      <Showcase/>
      <Portfolio/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
