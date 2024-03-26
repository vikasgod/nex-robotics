import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <>
        <div className="cs-page_heading cs-style1 cs-center text-center cs-bg" style={{backgroundImage: "url(/assets/images/contact_hero_bg.jpg)"}}>
            <div className="container">
            <div className="cs-page_heading_in">
                <h1 className="cs-page_title cs-font_50 cs-white_color">Contact Us</h1>
                <ol className="breadcrumb text-uppercase justify-content-center">
                    <li className="breadcrumb-items"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-items active">Contact</li>
                </ol>
            </div>
            </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80"></div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="cs-section_heading cs-style1">
                    <h3 className="cs-section_subtitle">Getting Touch</h3>
                    <h2 className="cs-section_title">Do you have a product <br/>in your mind?</h2>
                    </div>
                    <div className="cs-height_55 cs-height_lg_30"></div>
                    <ul className="cs-contact_info cs-style1 cs-mp0">
                    <li>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.08 11.82 12.69 11.9 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.58C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM9 0V10L12 7H18V0H9Z" fill="#FF4A17"></path>
                        </svg>
                        <span>+91-9833553020</span>
                    </li>
                    <li>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6.98V16C20 17.1 19.1 18 18 18H2C0.9 18 0 17.1 0 16V4C0 2.9 0.9 2 2 2H12.1C12.04 2.32 12 2.66 12 3C12 4.48 12.65 5.79 13.67 6.71L10 9L2 4V6L10 11L15.3 7.68C15.84 7.88 16.4 8 17 8C18.13 8 19.16 7.61 20 6.98ZM14 3C14 4.66 15.34 6 17 6C18.66 6 20 4.66 20 3C20 1.34 18.66 0 17 0C15.34 0 14 1.34 14 3Z" fill="#FF4A17"></path>
                        </svg>              
                        <span>
                            <a href="mailto: info@nex-robotics.com" className="__cf_email__">info@nex-robotics.com</a>
                        </span>
                    </li>
                    <li>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#FF4A17"></path>
                        </svg>              
                        <span>
                            Nex Robotics Pvt Ltd.
                            Unit No. 13,
                            Building No. 2 (A3), Sector 1,
                            Millennium Business Park,
                            Mahape, Navi Mumbai 400 710,
                            Maharashtra, INDIA</span>
                    </li>
                    </ul>
                    <div className="cs-height_0 cs-height_lg_50"></div>
                </div>
                <div className="col-lg-6">
                    <form id="cs-form" className="row">
                    
                        <input type="hidden" name="access_key" value="6d7bc3fc-6190-43c5-8298-89ac5ef7494f"/>
                        <input type="checkbox" name="botcheck" style={{display: "none"}}/>
                        <input type="hidden" name="subject" value="Submission from Laralink Template"/>

                        <div className="col-sm-6">
                            <label className="cs-primary_color">Full Name*</label>
                            <input type="text" className="cs-form_field" name="full-name" required=""/>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                        <div className="col-sm-6">
                            <label className="cs-primary_color">Email*</label>
                            <input type="text" className="cs-form_field" name="email" required=""/>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                        <div className="col-sm-6">
                            <label className="cs-primary_color">Product Type*</label>
                            <select className='cs-form_field select-bg'>
                                <option>Select product type</option>
                                <option>Drones</option>
                                <option>EOD / SWAT</option>
                                <option>0x Series Robots</option>
                                <option>Fire Bird VI Robots</option>
                            </select>
                            {/* <input type="text" className="cs-form_field" name="project" required=""/> */}
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                        <div className="col-sm-6">
                            <label className="cs-primary_color">Mobile*</label>
                            <input type="text" className="cs-form_field" name="number" required=""/>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                        <div className="col-lg-12">
                            <label className="cs-primary_color">Message*</label>
                            <textarea cols="30" rows="7" className="cs-form_field" name="message" required=""></textarea>
                            <div className="cs-height_25 cs-height_lg_25"></div>
                        </div>
                        <div className="col-lg-12">
                            <button className="cs-btn cs-style1" type="submit">
                            <span>Send Message</span>
                            <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor"></path>
                            </svg>                
                            </button>
                            <div id="cs-result"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="cs-height_150 cs-height_lg_80"></div>

        <div className="cs-google_map cs-bg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9289465747174!2d73.0147462734601!3d19.110772782101037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f241952c91%3A0xc4ed82b4104cbce3!2sNEX%20Robotics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1707813070151!5m2!1sen!2sin" width="600" height="450" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="cs-height_50 cs-height_lg_40"></div>
    </>
  )
}
