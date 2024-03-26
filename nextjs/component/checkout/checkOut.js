'use client'

import React, { useEffect } from 'react'
import Breadcrumb from '../common/breadcrumb';

export default function CheckOut() {
    let orderId = localStorage.getItem('order_id');

    const razorpayOptions = {
        key: "rzp_test_ZUg5A0JYhybcqr",
        name: "Nex-Robotics",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: "http://192.168.10.147:3000",
        prefill: {
            name: "Vikas",
            email: "vikas.g@fortune4.in",
            contact: "8268683550"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const paymentProcess = () => {
        var rzp1 = new Razorpay(razorpayOptions);
        rzp1.open();
    };

  return (
    <>
        <Breadcrumb data="Checkout" image='shop_hero_bg.jpg' />
        <div className="cs-height_100 cs-height_lg_80"></div>
        <div className="container">
            <div className="row">
            <div className="col-xl-7">
                <h2 className="cs-checkout-title">Billing Details</h2>
                <div className="cs-height_45 cs-height_lg_40"></div>
                <div className="row">
                <div className="col-lg-6">
                    <label className="cs-shop-label">First Name *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-6">
                    <label className="cs-shop-label">Last Name *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Company name (optional)</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Country / Region *</label>
                    <select className="cs-shop-input">
                    <option value="States">United States (US)</option>
                    <option value="Kingdom">United Kingdom</option>
                    <option value="Kanada">Kanada</option>
                    </select>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Street address *</label>
                    <input type="text" className="cs-shop-input" placeholder="House number and street name"/>
                    <input type="text" className="cs-shop-input" placeholder="Apartment, suite, unit, etc (optional) "/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Town / City *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">State *</label>
                    <select className="cs-shop-input">
                    <option value="California">California</option>
                    <option value="Gercy">New Gercy</option>
                    <option value="Daiking">Daiking</option>
                    </select>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">ZIP Code *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Phone *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                <div className="col-lg-12">
                    <label className="cs-shop-label">Email address *</label>
                    <input type="text" className="cs-shop-input"/>
                </div>
                </div>
                <div className="cs-height_45 cs-height_lg_45"></div>
                <h2 className="cs-checkout-title">Additional information</h2>
                <div className="cs-height_30 cs-height_lg_30"></div>
                <label className="cs-shop-label">Order notes (optional)</label>
                <textarea cols="30" rows="6" className="cs-shop-input"></textarea>
                <div className="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div className="col-xl-5">
                <div className="cs-shop-side-spacing">
                <div className="cs-shop-card">
                    <h2>Your order</h2>
                    <table className="cs-white_color">
                    <tbody>
                        <tr className="cs-semi_bold">
                        <td>Products</td>
                        <td className="text-end">Amount</td>
                        </tr>
                        <tr>
                        <td>60 RPM Side Shaft 37mm Diameter High Performance DC Gear Motor</td>
                        <td className="text-end word-wrap">₹ 200.00</td>
                        </tr>
                        <tr>
                        <td>200 RPM Side Shaft Heavy Duty DC Gear Motor</td>
                        <td className="text-end">₹ 550.00</td>
                        </tr>
                        <tr>
                        <td>300 RPM Side Shaft Super Heavy Duty DC Gear Motor</td>
                        <td className="text-end">₹ 350.00</td>
                        </tr>
                        <tr>
                        <td className="cs-semi_bold">Subtotal</td>
                        <td className="text-end word-wrap">₹ 605.00</td>
                        </tr>
                        <tr className="cs-semi_bold">
                        <td>Total</td>
                        <td className="text-end word-wrap">₹ 605.00</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                    <button className="cs-product_btn cs-semi_bold w-100" onClick={paymentProcess}>Procced To Checkout</button>
                </div>
                <div className="cs-height_50 cs-height_lg_30"></div>
                <div className="cs-shop-card">
                    <h2>Payment</h2>
                    <table>
                    <tbody>
                        <tr>
                        <td>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked=""/>
                            <label className="form-check-label m-0 cs-white_color cs-semi_bold" for="flexCheckDefault">
                                Cash on delivery
                            </label>
                            </div>
                            <p className="m-0 cs-payment_text">Pay with cash upon delivery.</p>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <p className="m-0 cs-payment_text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a>.</p>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <button className="cs-product_btn cs-semi_bold w-100">Place Order</button>
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
