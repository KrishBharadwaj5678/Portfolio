import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import "./index.css"
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Certifications from './components/Certifications/Certifications'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <MyWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App
