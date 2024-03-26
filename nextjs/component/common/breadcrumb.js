"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
export default function Breadcrumb({ data = "", image = "" }) {
  const router = usePathname()
  return (
    <>
      <div className="cs-page_heading cs-style1 cs-center text-center cs-bg" style={{ backgroundImage: `url(/assets/images/${image})` }}>
        <div className="container">
          <div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">{data}</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-items"><a href="/">Home</a></li>
              <li className="breadcrumb-items active"><Link href={`${router}`}>{data}</Link></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}