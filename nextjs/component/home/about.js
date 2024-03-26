'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function About() {
  const router = usePathname()
  return (
    <>
      <section>
        <div className="container">
          <div className={router === "/" ? "cs-funfact_wrap cs-type1" : "cs-funfact_wrap"}>
            <div className="cs-funfact_shape" data-src="assets/img/funfact_shape_bg.svg"></div>
            <div className="cs-funfact_left">
              <div className="cs-funfact_heading">
                <h2>About Us</h2>
                <p> Nex Robotics Pvt Ltd. is a leading robotics design firm that develops world className robotic platforms.</p>
              </div>
            </div>
            <div className="cs-funfact_right">
              <div className="cs-funfacts">
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span className="artificial-icon icon"></span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>Artificial Intelligence </p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span className='computed-distrubuted icon'></span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>Distributed computing</p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span className='agent-system icon'></span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>Multi agent systems</p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span className='mobile-robotics icon'></span>
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>Mobile Robotics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
