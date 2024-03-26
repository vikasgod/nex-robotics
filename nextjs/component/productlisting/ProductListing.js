import React from 'react'
import Image from 'next/image'
import FilterProduct from './filterProduct'

export default function ProductListing() {
  return (
    <>
        <div className="cs-height_150 cs-height_lg_80"></div>
        <div className="container">
          <div className="row">
            <FilterProduct/>
            <div className="col-lg-9">
              <div className="cs-height_0 cs-height_lg_60"></div>
              <div className="cs-shop_filter_wrap">
                <div className="cs-number_of_product">Showing 1–9 of 12 results</div>
                <form action="#" className="cs-shop_filter_form">
                  <select>
                    <option value="latest">Sort by latest</option>
                    <option value="high">Sort by low price</option>
                    <option value="low">Sort by high price</option>
                  </select>
                </form>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-6">
                  <div className="cs-product_card cs_style_1">
                    <div className="cs-product_thumb">
                      
                      <div className="cs-product_overlay"></div>
                      <Image
                        src="/assets/images/shop/02.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />  
                      <div className="cs-card_btns">
                        {/* <a href="#">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#a1)">
                              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="a1"><rect width="24" height="24" fill="currentColor"/></clipPath>
                            </defs>
                          </svg>                      
                        </a>
                        <a href="#">
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="currentColor"/>
                          </svg>                      
                        </a> */}
                        <a href="product-details">
                          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill="currentColor"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="cs-product_info">
                      <h2 className="cs-product_title"><a href="product-details">60 RPM Side Shaft 37mm Diameter High Performance DC Gear Motor</a></h2>
                      <p className="cs-product_price">Price: Rs. 236.00</p>
                    </div>
                  </div>
                  <div className="cs-height_55 cs-height_lg_25"></div>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                  <div className="cs-product_card cs_style_1">
                    <div className="cs-product_thumb">
                      
                      <Image
                        src="/assets/images/shop/03.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      /> 
                      <div className="cs-product_overlay"></div>
                      <div className="cs-card_btns">
                        {/* <a href="#">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#b2)">
                              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="b2"><rect width="24" height="24" fill="currentColor"/></clipPath>
                            </defs>
                          </svg>                      
                        </a>
                        <a href="#">
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="currentColor"/>
                          </svg>                      
                        </a> */}
                        <a href="product-details">
                          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill="currentColor"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="cs-product_info">
                      <h2 className="cs-product_title"><a href="product-details">200 RPM Side Shaft Heavy Duty DC Gear Motor</a></h2>
                      <p className="cs-product_price">Price: Rs. 708.00</p>
                    </div>
                  </div>
                  <div className="cs-height_55 cs-height_lg_25"></div>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                  <div className="cs-product_card cs_style_1">
                    <div className="cs-product_thumb">
                      
                      <Image
                        src="/assets/images/shop/01.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      /> 
                      <div className="cs-product_overlay"></div>
                      <div className="cs-card_btns">
                        {/* <a href="#">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#c3)">
                              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="c3"><rect width="24" height="24" fill="currentColor"/></clipPath>
                            </defs>
                          </svg>                      
                        </a>
                        <a href="#">
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="currentColor"/>
                          </svg>                      
                        </a> */}
                        <a href="product-details">
                          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill="currentColor"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="cs-product_info">
                      <h2 className="cs-product_title"><a href="product-details">300 RPM Side Shaft Super Heavy Duty DC Gear Motor</a></h2>
                      <p className="cs-product_price">Price: Rs. 826.00</p>
                    </div>
                  </div>
                  <div className="cs-height_55 cs-height_lg_25"></div>
                </div>
                
              </div>
              <ul className="cs-pagination_box cs-white_color cs-mp0 cs-semi_bold">
                <li>
                  <a className="cs-pagination_item cs-center active" href="#">1</a>
                </li>
                <li>
                  <a className="cs-pagination_item cs-center" href="#">2</a>
                </li>
                <li>
                  <a className="cs-pagination_item cs-center" href="#">3</a>
                </li>
                <li>
                  <a href="#" className="cs-pagination_item cs-center">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.272L4.55116 6L0 10.728L1.22442 12L7 6L1.22442 0L0 1.272Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80"></div>
    </>
  )
}
