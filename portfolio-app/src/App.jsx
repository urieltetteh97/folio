import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import './index.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'  


const App = () => {
  return (
    <>
    <Navbar />
    <br />
    <About />
    <AboutMe />
    <Projects />
    <Contact />
    </>
  )
}


export default App
