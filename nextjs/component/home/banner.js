import React from 'react'
import Link from 'next/link';

export default function Banner() {
  return (
    <>
    <div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1" id="home">
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="container">
        <div className="cs-hero_text">
          <h1 className="cs-hero_title wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s"> Artificial <span className='d-block'>Intelligence</span>  </h1>
          <div className="cs-hero_info">
            <div>
              <Link  href="#" className="cs-text_btn">
                <span>Get a Quote</span>
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
            <div>
              <div className="cs-hero_subtitle">Bring Force of Artificial Intelligence To Your Business Development. Artificial Intelligence
                is The New Big Thing 
                in Technology </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-hero_social_wrap cs-secondary_font cs-primary_color">
        <div className="cs-hero_social_title">Follow Us</div>
        <ul className="cs-hero_social_links">
          <li>
            <Link href="https://www.facebook.com/people/Nex-Robotics/100068073804470/" target="_blank">Facbook</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/user/NexRobotics" target="_blank">YouTube</Link>
          </li>
          <li>
            <Link href="https://twitter.com/NexRobotics" target="_blank">Twitter</Link>
          </li>
        </ul>
      </div>
      <Link href="#service" className="cs-down_btn"></Link>
    </div>
    </>
  )
}
