import React from 'react'
import TeamMembers from './teamMembers'
import Banner from './banner'
import About from './about'
import Products from './products'
import Testimonials from './testimonials'
import News from './news'
import Client from './client'
import Video from './video'

export default function HomeWrapper() {
  return (
    <>
    <Banner/>
    <About/>
    <Products/>
    <Video />
    <TeamMembers/>
    {/* <Testimonials/>  */}
    <News/>
    <Client/>
    
    </>
  )
}
