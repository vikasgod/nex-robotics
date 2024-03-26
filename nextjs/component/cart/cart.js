'use client';

import { apiList } from '@/utilities/apiList'
import { apiPostCall } from '@/utilities/service'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import Breadcrumb from '../common/breadcrumb';

export default function Cart() {
  const router = useRouter();
  const handleClick = async () => {
    const payload = {
      "product_id": "3",
      "email": "vikas.g@fortune4.in",
      "name": "Vikas",
      "order_id": "",
      "price": "",
    }
    let response = await apiPostCall(apiList.CREATE_ORDER, {}, payload)

    if (response) {
      localStorage.setItem('order_id', response.razorpayData.id)
      router.push('/checkout')
    }
  }
  return (
    <>
     
      <Breadcrumb data='Cart' image='shop_hero_bg.jpg' />
      <div className="cs-height_150 cs-height_lg_80"></div>
      <div className="container">
    <div className="row">
      <div className="col-xl-8">
        <div className="table-responsive">
          <table className="cs-cart_table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cs-cart_table_media">
                    <Image src="/assets/images/shop/02.png" height={100} width={100}  alt="Thumb"/>
                    <h3>60 RPM Side Shaft 37mm Diameter High Performance DC Gear Motor</h3>
                  </div>
                </td>
                <td className='word-wrap'>NR-FBVI-STDV</td>
                <td className='word-wrap'>₹
                  236.00</td>
                <td>
                  <div className="cs-quantity">
                    <button className="cs-quantity_button cs-increment"><i className="fa-solid fa-angle-up"></i></button>
                    <span className="cs-quantity_input">1</span>
                    <button className="cs-quantity_button cs-decrement"><i className="fa-solid fa-angle-down"></i></button>
                  </div>
                </td>
                <td className='word-wrap'>
                  ₹ 20.00
                </td>
                <td className="text-center">
                  <button className="cs-cart-table-close"><i className="fa-solid fa-xmark"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cs-cart_table_media">
                    <Image src="/assets/images/shop/03.png" height={100} width={100}  alt="Thumb"/>
                    <h3>200 RPM Side Shaft Heavy Duty DC Gear Motor</h3>
                  </div>
                </td>
                <td className='word-wrap'>NR-FBVI-STDV</td>
                <td className='word-wrap'>₹ 708.00</td>
                <td>
                  <div className="cs-quantity">
                    <button className="cs-quantity_button cs-increment"><i className="fa-solid fa-angle-up"></i></button>
                    <span className="cs-quantity_input">1</span>
                    <button className="cs-quantity_button cs-decrement"><i className="fa-solid fa-angle-down"></i></button>
                  </div>
                </td>
                <td className='word-wrap'>
                  ₹ 20.00
                </td>
                <td className="text-center">
                  <button className="cs-cart-table-close"><i className="fa-solid fa-xmark"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cs-cart_table_media">
                    <Image src="/assets/images/shop/01.png" height={100} width={100}  alt="Thumb"/>
                    <h3>300 RPM Side Shaft Super Heavy Duty DC Gear Motor</h3>
                  </div>
                </td>
                <td className='word-wrap'>NR-FBVI-STDV</td>
                <td className='word-wrap'>₹ 826.00</td>
                <td>
                  <div className="cs-quantity">
                    <button className="cs-quantity_button cs-increment"><i className="fa-solid fa-angle-up"></i></button>
                    <span className="cs-quantity_input">1</span>
                    <button className="cs-quantity_button cs-decrement"><i className="fa-solid fa-angle-down"></i></button>
                  </div>
                </td>
                <td className='word-wrap'>
                  ₹ 20.00
                </td>
                <td className="text-center">
                  <button className="cs-cart-table-close"><i className="fa-solid fa-xmark"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cs-height_5 cs-height_lg_5"></div>
        <div className="cs-cart-offer">
          <div>
            <form action="#" className="cs-coupon-doce-form">
              <input type="text" placeholder="Coupon Code"/>
              <button className="cs-product_btn cs-color1 cs-semi_bold">Update Cart</button>
            </form>
          </div>
          <div>
            <button className="cs-product_btn cs-semi_bold">Update Cart</button>
          </div>
        </div>
        <div className="cs-height_30 cs-height_lg_30"></div>
      </div>
      <div className="col-xl-4">
        <div className="cs-shop-side-spacing">
          <div className="cs-shop-card">
            <h2>Cart Totals</h2>
            <table className="cs-white_color">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-end">₹ 605.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="text-end">₹ 605.00</td>
                </tr>
              </tbody>
            </table>
            <div className="cs-height_30 cs-height_lg_30"></div>
            <button className="cs-product_btn cs-semi_bold w-100" onClick={() => handleClick()}>Procced To Checkout</button>
          </div>
          <div className="cs-height_30 cs-height_lg_30"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="cs-height_120 cs-height_lg_50"></div>
    </>
  )
}
