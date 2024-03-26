"use client"; 
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function NexClient() {
    const data = [
        {
          "id": 1,
          "name": "John Doe",
          "position": "Mechanical Engineer",
          "img" : "/assets/images/clients/CSIR-NALL.png"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "position": "Senior Mechanical Designer",
          "img" : "/assets/images/clients/IIT_Delhi_Logo.png"
        },
        {
          "id": 3,
          "name": "Robert Johnson",
          "position": "Mechanical Technician",
          "img" : "/assets/images/clients/Indian_Army.png"
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "position": "Quality Control Specialist",
          "img" : "/assets/images/clients/Indian_Navy.png"
        },
        {
          "id": 5,
          "name": "Michael Brown",
          "position": "Mechanical Drafter",
          "img": "/assets/images/clients/ISRO_Logo.png"
        },
        {
          "id": 6,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/tifr_logo.png"
        },
        {
          "id": 7,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/BARC_Logo.png"
        },
        {
          "id": 8,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/CEERI_Logo.png"
        },
        {
          "id": 9,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/dae-logo.png"
        },
        {
          "id": 10,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/Deemed_Institute.png"
        },
        {
          "id": 11,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/DRDO_Logo.png"
        },
        {
          "id": 12,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/vipro.png"
        },
        {
          "id": 13,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/larsen-toubro-logo.png"
        },
        {
          "id": 14,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/plasma-institute.png"
        },
        {
          "id": 15,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/tata-logo.png"
        },
        {
          "id": 16,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/bharat-electronics.png"
        },
        {
          "id": 17,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "/assets/images/clients/mahindra-logo.png"
        }
      ]

    const clientOptions = {
    className: "swiper",
    centeredSlides: false,
    loop: true,
    autoplay : true,
    slidesPerView: 6,
    freeMode: false,
    speed: 5000,
    spaceBetween: 40,
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 6,
      spaceBetween: 30
    },
   
  }
}
  return (
    <>
        <section>
            <div className="container">
                <div className="cs-slider cs-style2 cs-gap-24">
                    <div className="cs-slider_heading cs-style1">
                        <div className="cs-section_heading cs-style1">
                            <h3 className="cs-section_subtitle wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s"> Our Customers </h3>
                            <h2 className="cs-section_title">Customers </h2>
                        </div>
                    </div>
                    <div className="cs-height_85 cs-height_lg_45"></div>
                    
                    <Swiper {...clientOptions}>
                    {
                        data.map((item,i)=>(
                        <SwiperSlide> 
                            <div key={i} className="cs-slide">
                                <div className="clients-wrapper">
                                    <Image src={item.img} height={100} width={100}/>                                   
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                    }
                    </Swiper>
                    <div className="cs-pagination cs-style1 cs-hidden_desktop"></div>
                </div>
                <div className="cs-height_85 cs-height_lg_45"></div>
            </div>
            
        </section>
    </>
  )
}
