import React from 'react'
import Breadcrumb from '../common/breadcrumb'
import News from './news'


export default function NewsWrapper() {
  return (
    <>
      <Breadcrumb data='News' image='about_hero_bg.jpg' />
      <News/>
    </>
  )
}
