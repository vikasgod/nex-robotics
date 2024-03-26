"use client";

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


export default function NexProducts() {
  const data = [
    {
      "id" :"1",
      "backgroundImage": "/assets/images/200-RPM-Side-Shaft.png",
      "title" : "200 RPM Side Shaft Heavy Duty DC Gear Motor"
    },
    {
      "id" :"2",
      "backgroundImage": "/assets/images/motar-drivers.png",
      "title" : "60 RPM Side Shaft 37mm Diameter High Performance DC Gear Motor"
    },
    {
      "id" :"3",
      "backgroundImage": "/assets/images/300-RPM-side-shaft.png",
      "title" : "300 RPM Side Shaft Super Heavy Duty DC Gear Motor"
    },
    {
      "id" :"4",
      "backgroundImage": "/assets/images/200-RPM-Side-Shaft.png",
      "title" : "200 RPM Side Shaft Heavy Duty DC Gear Motor"
    },
  ]
  const swiperOptions = {
    className: "swiper",
    centeredSlides: true,
    loop: true,
    autoplay : true,
    slidesPerView: 2.5,
    freeMode: false,
    speed: 5000,
    spaceBetween: 40,
    pagination: {                       
      el: '.swiper-pagination',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
   
  }
}

  
  return (
    <>
    <section>
    <div className="cs-height_150 cs-height_lg_80"></div>
      <div className="container">
        <div className="cs-section_heading cs-style1 text-center">
          <h3 className="cs-section_subtitle">Our Products</h3>
          <h2 className="cs-section_title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s"> Products Categories </h2>
        </div>
      </div>
      <div class="cs-height_90 cs-height_lg_45"></div>
        <div class="swiper">
          <Swiper {...swiperOptions}>
          {
            data.map((item,i)=>(
            <SwiperSlide className="productswiperslide">
              <div>
                <Link href="#" className='swipper-cs-portfolio'>
                  <div className="swipper-portfolio_bg portfolio_bg" style={{backgroundImage: `url(${item.backgroundImage})`}}></div>
                  <div className="cs-portfolio_info">
                   
                    <h2 className="cs-portfolio_title">{item.title}</h2>
                    <div className="cs-portfolio_subtitle">See Details</div>
                  </div>
                </Link>
              </div>
              
            </SwiperSlide>
            ))
          } 
          </Swiper>
        </div>
        <div class="cs-height_90 cs-height_lg_45"></div>
      </section>
    </>
  )
}


