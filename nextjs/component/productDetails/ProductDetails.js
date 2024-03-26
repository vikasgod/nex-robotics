import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetails() {
  return (
    <>
        <div className="cs-hero cs-style3 cs-bg cs-fixed_bg cs-shape_wrap_1 introduction" id="home">
          <div className="cs-shape_1"></div>
          <div className="cs-shape_1"></div>
          <div className="cs-shape_1"></div>
          <div className="cs-circle_1"></div>
          <div className="cs-circle_2"></div>
          <div className="container">
            <div className="cs-hero_text">
              <h1 className="cs-hero_title text-start wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  60 RPM Side Shaft 37mm Diameter  High Performance DC Gear Motor
              </h1>
              <div className="cs-hero_subtitle text-start mb-0">We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.</div>
              <ul className="cs-single_product_info">
                  <li><b>Product ID : </b> NR-GMD-SSHP-37mm-60</li>
                  <li><b>Weight: </b> 178 gms</li>
                  <li><b>Price : </b> Rs.236.00</li>
                </ul>
              
              
            </div>
          </div>
    
        </div>

        <div className="container section-padding mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="sticky-element">
                <div className="image-wrapper">
                    <Image
                      src="/assets/images/shop/300-RPM-side-shaft.png"
                      width={400}
                      height={400}
                      alt="Picture of the author"
                    />
                </div>
                {/* <div className="btn-wrap">
                    <Link href="#" className="cs-product_btn cs-semi_bold w-50">Add To Cart</Link>
                    <div className="cs-quantity w-50">
                      <button className="cs-quantity_button cs-increment"><i className="fa-solid fa-angle-up"></i></button>
                      <span className="cs-quantity_input">1</span>
                      <button className="cs-quantity_button cs-decrement"><i className="fa-solid fa-angle-down"></i></button>
                  </div>
                </div> */}
              </div>
              
            </div>
            <div className="col-lg-6">
              <div className="fixed-content">
                  <h2 className="cs-iconbox_title m-mt-5">Introduction</h2>
                  <p>60 RPM Side Shaft 37mm Diameter High Performance DC Gear Motor is suitable for small robots / automation systems. It has sturdy construction with gear box built to handle stall torque produced by the motor. Drive shaft is supported from both sides with metal bushes. Motor runs smoothly from 4V to 12V and gives 60 RPM at 12V. Motor has 6mm diameter, 18mm length drive shaft with D shape for excellent coupling.</p>
                  <p>Table below gives fairly good idea of the motor’s performance in terms of RPM vs voltage at no load and that of stall torque at different voltages.</p>
                  <span className="note">Note: This motor will be bit noisy while running.</span>

                  <div className="cs-accordians cs-style1 mt-5">
                    <div className="cs-accordian active">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">Specifications</h2>
                        <span className="cs-accordian_toggle cs-accent_color">
                          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor"/>
                          </svg>                    
                        </span>
                      </div>
                      <div className="cs-accordian_body">
                        <ul className="list">
                          <li>RPM: 200 at 12V</li>
                          <li>Voltage: 4V to 12V</li>
                          <li>Stall torque: 15Kg-cm at stall current of 4.0A@12V</li>
                          <li>Shaft diameter: 8mm</li>
                          <li>Shaft length: 17.5mm</li>
                          <li>Gear assembly: Spur</li>
                          <li>Brush type: Carbon</li>
                          <li>Motor weight: 290gms</li>
                          <li>Dimension: Refer to diagram below</li>
                        </ul>
                      </div>
                    </div>
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">Dimensions</h2>
                        <span className="cs-accordian_toggle cs-accent_color">
                          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor"/>
                          </svg>                    
                        </span>
                      </div>
                      <div className="cs-accordian_body">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>
                        <span className="note mt-5">Note: This is representative torque. Actual torque may vary by ±20%</span>
                      </div>
                    </div>
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">Recommended wheels</h2>
                        <span className="cs-accordian_toggle cs-accent_color">
                          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor"/>
                          </svg>                    
                        </span>
                      </div>
                      <div className="cs-accordian_body">
                        <p>Any wheel with 6mm diameter bore can be used with this motor</p>
                        <ul className="list mt-3">
                          <li>Universal Wheel</li>
                          <li>87mm Diameter Multipurpose Wheel for 6mm Shaft Gear Motors</li>
                          <li>87mm Diameter Multipurpose Wheel for Plastic Gear Motors</li>
                          <li>70mm Diameter x 19mm Thick x 6mm Bore Wheel</li>
                          <li>70mm Diameter x 36mm Thick x 6mm Bore Wheel</li>
                          <li>106mm Diameter x 44mm Thick x 6mm Bore Wheel</li>
                          <li>109mm Diameter x 21mm Thick x 6mm Bore Wheel</li>
                        </ul>
                      </div>
                    </div>
                    
                    
                  </div>
              </div>

            </div>
           
          </div>
        </div>
    </>
  )
}
