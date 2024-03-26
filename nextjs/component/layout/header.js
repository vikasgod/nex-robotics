"use client";
import Link from 'next/link';
import { Logo } from '@/utilities/images/common';
import React, { useState } from 'react';
import SideBar from './sideBar';
import Image from 'next/image';


export default function Header() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
 
  return (
    <>
    <header className="cs-site_header cs-style1 text-uppercase cs-sticky_header">
    <div className="cs-main_header">
      <div className="container">
        <div className="cs-main_header_in">
          <div className="cs-main_header_left">
            <Link className="cs-site_branding" href="/">
              <Image src={Logo} height={160} width={150} alt='logo'/>
              
            </Link>
          </div>
          <div className="cs-main_header_center">
            <div className="cs-nav cs-primary_font cs-medium">
                <ul className="cs-nav_list">
                  <li className="cs-mega_menu">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/research">Research</Link> 
                  </li> 
                  <li>
                    <Link href="/contact-us">Contact Us</Link> 
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              <span className="cs-munu_toggle"><span></span></span>
              {/* <button  onClick={toggle}>Toggle Subjects</button> */}
            </div>
          </div>
          <div className="cs-main_header_right">
            <div className="cs-toolbox">
              <Link href="/cart" className="cs-header_cart">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1441_534)">
                  <path d="M19.25 5.5H16.5C16.5 4.04131 15.9205 2.64236 14.8891 1.61091C13.8576 0.579463 12.4587 0 11 0C9.54131 0 8.14236 0.579463 7.11091 1.61091C6.07946 2.64236 5.5 4.04131 5.5 5.5H2.75C2.02065 5.5 1.32118 5.78973 0.805456 6.30546C0.289731 6.82118 0 7.52065 0 8.25L0 17.4167C0.00145554 18.6318 0.484808 19.7967 1.34403 20.656C2.20326 21.5152 3.3682 21.9985 4.58333 22H17.4167C18.6318 21.9985 19.7967 21.5152 20.656 20.656C21.5152 19.7967 21.9985 18.6318 22 17.4167V8.25C22 7.52065 21.7103 6.82118 21.1945 6.30546C20.6788 5.78973 19.9793 5.5 19.25 5.5ZM11 1.83333C11.9725 1.83333 12.9051 2.21964 13.5927 2.90728C14.2804 3.59491 14.6667 4.52754 14.6667 5.5H7.33333C7.33333 4.52754 7.71964 3.59491 8.40728 2.90728C9.09491 2.21964 10.0275 1.83333 11 1.83333ZM20.1667 17.4167C20.1667 18.146 19.8769 18.8455 19.3612 19.3612C18.8455 19.8769 18.146 20.1667 17.4167 20.1667H4.58333C3.85399 20.1667 3.15451 19.8769 2.63879 19.3612C2.12306 18.8455 1.83333 18.146 1.83333 17.4167V8.25C1.83333 8.00688 1.92991 7.77373 2.10182 7.60182C2.27373 7.42991 2.50688 7.33333 2.75 7.33333H5.5V9.16667C5.5 9.40978 5.59658 9.64294 5.76849 9.81485C5.94039 9.98676 6.17355 10.0833 6.41667 10.0833C6.65978 10.0833 6.89294 9.98676 7.06485 9.81485C7.23676 9.64294 7.33333 9.40978 7.33333 9.16667V7.33333H14.6667V9.16667C14.6667 9.40978 14.7632 9.64294 14.9352 9.81485C15.1071 9.98676 15.3402 10.0833 15.5833 10.0833C15.8264 10.0833 16.0596 9.98676 16.2315 9.81485C16.4034 9.64294 16.5 9.40978 16.5 9.16667V7.33333H19.25C19.4931 7.33333 19.7263 7.42991 19.8982 7.60182C20.0701 7.77373 20.1667 8.00688 20.1667 8.25V17.4167Z" fill="currentColor"></path>
                  </g>
                  <defs>
                  <clipPath id="clip0_1441_534">
                  <rect width="22" height="22" fill="white"></rect>
                  </clipPath>
                  </defs>
                </svg>
                <span className="cs-header_cart_label">0</span>
              </Link>
              <span className="cs-icon_btn">
                <span className="cs-icon_btn_in">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </div>
          </div>


          <div className="sideNavigation" style={{
            display: showMe?"block":"none"
          }}>
            <p>This should toggle my display</p>
          </div>


        </div>
      </div>
    </div>
  </header>
  <SideBar/>
    </>
  )
}
