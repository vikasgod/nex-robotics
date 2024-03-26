"use client";
import { Logo } from '@/utilities/images/common'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function Footer() {
  const data = [
    {
      id: "1",
      "title": "Products",
      "content": ["Motors and Accessories", "Motor Drivers", "Wheels and Accessories", "Sensors"]
    },
    {
      id: "2",
      "title": "Contact Us",
      "content": ["Nex Robotics Pvt Ltd Unit No. 13 Building No. 2 (A3) Sector 1 Millennium Business Park Mahape Navi Mumbai 400 710 Maharashtra INDIA"],
      "mobile": "+91-9833553020"
    }
  ]
  return (
    <>
      <footer className="cs-fooer cs-footer_dark_bg_1">
        <div className="cs-fooer_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="cs-footer_item">
                  <div className="cs-text_widget">
                    <Image src={Logo} width={150} height={100} alt="logo" />
                    <p> Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium. </p>
                  </div>
                  <div className="cs-social_btns cs-style1">
                    <Link href="#" className="cs-center">
                      <svg fill="#fff" width="15" height="15" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/></svg>
                    </Link>
                    <Link href="#" className="cs-center">
                      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4651 2.95396C11.4731 3.065 11.4731 3.17606 11.4731 3.2871C11.4731 6.67383 8.89535 10.5761 4.18402 10.5761C2.73255 10.5761 1.38421 10.1557 0.25 9.42608C0.456226 9.44986 0.654494 9.4578 0.868655 9.4578C2.06629 9.4578 3.16879 9.0533 4.04918 8.36326C2.92291 8.33946 1.97906 7.60183 1.65386 6.5866C1.81251 6.61038 1.97112 6.62624 2.1377 6.62624C2.36771 6.62624 2.59774 6.59451 2.81188 6.53901C1.63802 6.30105 0.757595 5.26996 0.757595 4.02472V3.99301C1.09864 4.18336 1.49524 4.30233 1.91558 4.31818C1.22554 3.85814 0.773464 3.07294 0.773464 2.1846C0.773464 1.70872 0.900344 1.27249 1.12244 0.891774C2.38355 2.44635 4.27919 3.46156 6.40481 3.57262C6.36516 3.38226 6.34136 3.184 6.34136 2.9857C6.34136 1.57388 7.4835 0.423828 8.90323 0.423828C9.64086 0.423828 10.3071 0.733156 10.7751 1.23284C11.354 1.1218 11.9093 0.907643 12.401 0.614185C12.2106 1.20906 11.8061 1.70875 11.2748 2.02598C11.7903 1.97049 12.29 1.82769 12.75 1.62942C12.4011 2.13702 11.9648 2.5891 11.4651 2.95396V2.95396Z" fill="white"></path>
                      </svg>
                    </Link>
                    <Link href="#" className="cs-center">
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4888 1.48066C12.345 0.939353 11.9215 0.513038 11.3837 0.368362C10.4089 0.105469 6.5 0.105469 6.5 0.105469C6.5 0.105469 2.59116 0.105469 1.61633 0.368362C1.07853 0.513061 0.65496 0.939353 0.5112 1.48066C0.25 2.4618 0.25 4.50887 0.25 4.50887C0.25 4.50887 0.25 6.55595 0.5112 7.53709C0.65496 8.0784 1.07853 8.48695 1.61633 8.63163C2.59116 8.89452 6.5 8.89452 6.5 8.89452C6.5 8.89452 10.4088 8.89452 11.3837 8.63163C11.9215 8.48695 12.345 8.0784 12.4888 7.53709C12.75 6.55595 12.75 4.50887 12.75 4.50887C12.75 4.50887 12.75 2.4618 12.4888 1.48066V1.48066ZM5.22158 6.36746V2.65029L8.48861 4.50892L5.22158 6.36746V6.36746Z" fill="white"></path>
                      </svg>
                    </Link>
                    
                  </div>
                </div>
              </div>

              {
                data.map((item, i) => (
                  <div key={i} className="col-lg-3 col-sm-6">
                    <div className="cs-footer_item">

                      <h2 className="cs-widget_title">{item.title}</h2>
                      <ul className="cs-menu_widget cs-mp0">
                        {
                          item.content?.map((arr, el) => (
                            <li key={el}>
                              <Link href="#">{arr}</Link>
                            </li>
                          ))
                        }
                      </ul>
                      {
                        item.mobile ? <p><b>Mobile No.</b> : {item.mobile}</p> : ""
                      }
                    </div>
                  </div>
                ))
              }

              <div className="col-lg-3 col-sm-6">
                <div className="cs-footer_item">
                  <h2 className="cs-widget_title">Subscribe</h2>
                  <div className="cs-newsletter cs-style1">
                    <form action="#" className="cs-newsletter_form">
                      <input type="email" className="cs-newsletter_input" placeholder="example@gmail.com" />
                      <button className="cs-newsletter_btn">
                        <span>Send</span>
                      </button>
                    </form>
                    <div className="cs-newsletter_text"> At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit. </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="cs-bottom_footer">
            <div className="cs-bottom_footer_left">
              <div className="cs-copyright">Copyright © 2024 Nex Robotics.</div>
            </div>
            <div className="cs-bottom_footer_right">
              <ul className="cs-footer_links cs-mp0">
                <li>
                  <Link href="#">Terms of Use</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
