"use client";

import ProductListingWrapper from '@/component/productlisting/productlistingWrapper'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {
  const path = usePathname()
  console.log("object",path)
  useEffect(()=>{
    document.body.classList.add("overflowScroll");
  },[path])
  return (
    <>
        <ProductListingWrapper/>
    </>
  )
}
