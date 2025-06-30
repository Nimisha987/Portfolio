import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from './components/services/services'
import MyWork from './components/MyWork/mywork'
import Contact from './components/contact/contact'
import Footer from './components/Footer/footer'

const App=()=>{
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App