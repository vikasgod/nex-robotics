import { Search } from '@/utilities/images/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FilterProduct() {
    return (
        <div className="col-lg-3">
            <div className="cs-shop_sidebar">
                <div className="cs-shop_sidebar_widget">
                    <form action="#" className="cs-shop_search">
                        <input className="cs-shop_search_input" type="text" placeholder="Search Products..." />
                        <button className="cs-shop_search_btn">
                            <Image
                                src={Search}
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </button>
                    </form>
                </div>
                <div className="cs-shop_sidebar_widget">
                    <h3 className="cs-shop_sidebar_widget_title">Categories</h3>
                    <ul className="cs-shop_sidebar_category_list">
                        <li><Link href="#">Drones</Link></li>
                        <li><Link href="#">Motor Drivers</Link></li>
                        <li><Link href="#">Wheels and Accessories</Link></li>
                        <li><Link href="#">Sensors</Link></li>
                        <li><Link href="#">Robotic Arms and Servo Pods</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
