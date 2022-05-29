import React from 'react'
import AboutSolutions from '../../components/About_Solutions/About_Solutions'
import Clients from './container/Clients/Clients'
import Header from './container/Header/Header'
import Location from './container/Location/Location'
import Press from './container/Press/Press'
import Products from './container/Products/Products'
import Projects from './container/Projects/Projects'
import Quote from './container/Quote/Quote'
import Services from './container/Services/Services'
import Standout from './container/Standout/Standout'
import Testimonials from './container/Testimonials/Testimonials'
// import About from './container/About/About'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <AboutSolutions/>
      <Services/>
      <Products/>
      <Clients/>
      <Projects/>
      <Testimonials/>
      <Standout/>
      <Press/>
      <Quote/>
      <Location/>
    </div>
  )
}

export default LandingPage