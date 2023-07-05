import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Showcase from './components/Showcase/Showcase'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team/Team'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'




function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Experience/>
      <Showcase/>
      <Portfolio/>
      <Team/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default App
