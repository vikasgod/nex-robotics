import React from 'react'
import Breadcrumb from '../common/breadcrumb'
import AboutUs from './about'
import About from './../../component/home/about'


export default function AboutWrapper() {
  return (
    <>
      <Breadcrumb data='About' image='about_hero_bg.jpg' />
      <AboutUs />
      <About />
    </>
  )
}
