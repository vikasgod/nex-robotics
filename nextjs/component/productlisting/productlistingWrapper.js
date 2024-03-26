import React from 'react'
import ProductListing from './ProductListing'
import Breadcrumb from '../common/breadcrumb'


export default function ProductListingWrapper() {
  return (
    <>
      <Breadcrumb data="Products" image="shop_hero_bg.jpg" />
      <ProductListing />
    </>
  )
}
