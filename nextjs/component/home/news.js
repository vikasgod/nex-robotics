"use client";

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function News() {
  const newsOptions = {
    className: "swiper",
    centeredSlides: false,
    loop: true,
    autoplay : true,
    slidesPerView: 2,
    freeMode: false,
    speed: 5000,
    spaceBetween: 20,
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
        slidesPerView: 2,
        spaceBetween: 30
      },
    
    }
}
  return (
    <>
   
    <section className='news-section cs-shape_wrap_4 cs-parallax'>
        <div className="cs-shape_4 cs-to_up"></div>
        <div className="cs-shape_4 cs-to_right"></div>
        <div className="cs-height_150 cs-height_lg_80"></div>
        
            <div className="cs-slider cs-style1">
              <div className="cs-slider_left">
                
                  <div className="cs-section_heading cs-style1">
                    <h3 className="cs-section_subtitle">Our News</h3>
                    <h2 className="cs-section_title">News & Updates</h2>
                    <div className="cs-height_45 cs-height_lg_20"></div>
                    <Link href="#" className="cs-text_btn wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">
                      <span>View More News</span>
                      <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor"></path>
                      </svg>
                    </Link>
                  </div>
                  
              </div>
              <div className="cs-slider_right">
                  <Swiper {...newsOptions}>
                  
                        <SwiperSlide> 
                          <div className="cs-post cs-style1">
                            <Link href="#" className="cs-post_thumb">
                              <Image src="/assets/images/post_2.jpg" width={360} height={425} alt="Post" />
                              <div className="cs-post_overlay"></div>
                            </Link>
                            <div className="cs-post_info">
                              <div className="cs-posted_by">10 Feb 2024</div>
                              <h2 className="cs-post_title">
                                <Link href="#">Nex robotics has added support for Microsoft Robotics Developer Studio...</Link>
                              </h2>
                            </div>
                          </div>
                          
                        </SwiperSlide>
                        <SwiperSlide> 
                          <div className="cs-post cs-style1">
                            <Link href="#" className="cs-post_thumb">
                              <Image src="/assets/images/post_2.jpg" width={360} height={425} alt="Post" />
                              <div className="cs-post_overlay"></div>
                            </Link>
                            <div className="cs-post_info">
                              <div className="cs-posted_by">10 Feb 2024</div>
                              <h2 className="cs-post_title">
                                <Link href="#">Nex robotics has added support for Microsoft Robotics Developer Studio...</Link>
                              </h2>
                            </div>
                          </div>
                          
                        </SwiperSlide>
                        <SwiperSlide> 
                          <div className="cs-post cs-style1">
                            <Link href="#" className="cs-post_thumb">
                              <Image src="/assets/images/post_2.jpg" width={360} height={425} alt="Post" />
                              <div className="cs-post_overlay"></div>
                            </Link>
                            <div className="cs-post_info">
                              <div className="cs-posted_by">10 Feb 2024</div>
                              <h2 className="cs-post_title">
                                <Link href="#">Nex robotics has added support for Microsoft Robotics Developer Studio...</Link>
                              </h2>
                            </div>
                          </div>
                          
                        </SwiperSlide>
                        <SwiperSlide> 
                          <div className="cs-post cs-style1">
                            <Link href="#" className="cs-post_thumb">
                              <Image src="/assets/images/post_2.jpg" width={360} height={425} alt="Post" />
                              <div className="cs-post_overlay"></div>
                            </Link>
                            <div className="cs-post_info">
                              <div className="cs-posted_by">10 Feb 2024</div>
                              <h2 className="cs-post_title">
                                <Link href="#">Nex robotics has added support for Microsoft Robotics Developer Studio...</Link>
                              </h2>
                            </div>
                          </div>
                          
                        </SwiperSlide>
                        
                </Swiper>
              </div>
            </div>
        
        <div className="cs-height_150 cs-height_lg_80"></div>
    </section>
    </>
  )
}
