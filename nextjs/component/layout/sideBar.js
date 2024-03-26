"use client";
import { Logo } from '@/utilities/images/common'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="cs-side_header">
      <button className="cs-close"></button>
      <div className="cs-side_header_overlay"></div>
      <div className="cs-side_header_in">
        <ul className="menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About</a></li>
        </ul>
        
        
       
        
       
      </div>
    </div>
  )
}
