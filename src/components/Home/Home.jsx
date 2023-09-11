import React from 'react'
import About from '../About/About'
import BlogSection from '../Blog/BlogSection'
import Contact from '../Contact/Contact'
import Events from '../Events/Events'
import Footer from '../footer/Footer'
import Gallery from '../Gallery/Gallery'

import Navbar from '../Header/Navbar'
import Hero from '../HeroSection/Hero'
import OverHosts from '../overhosts/OverHosts'
import Subscribe from '../Subcribe/Subscribe'
import WhatWeDo from '../whatwedo/WhatWeDo'
const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <Hero/>
    <About/>
    <OverHosts/>
    <Events/>
    <WhatWeDo/>
    <Gallery/>
    <Contact/>
    <BlogSection/>
    <Subscribe/>
    <Footer/>
    </div>
  )
}

export default Home
