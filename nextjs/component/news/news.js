import React from 'react'
import Image from 'next/image'

export default function News() {
  return (
    <>
    <div>
        <div className="cs-height_150 cs-height_lg_80"></div>
    
        <section>
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <div className="cs-post cs-style2">
                <div className="cs-post_thumb cs-radius_15">
                    <Image src="/assets/images/maxresdefault.jpg" width="736" height="422" alt="Post" className="w-100 cs-radius_15" />
                </div>
                <div className="cs-post_info">
                    <div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                    <span className="cs-posted_by">13 Feb 2024</span>
                    <a href="#" className="cs-post_avatar">News</a>
                    </div>
                    <h2 className="cs-post_title">Microsoft Robotics Development Studio Support For FIRE BIRD V Platform</h2>
                    <p>Nex robotics has added support for Microsoft Robotics Developer Studio (MRDS) on FireBird V research platform. FireBird V is one of the most widely deployed research platforms designed by Department of CSE, IIT Bombay and Nex robotics. It has many sensors and actuators which can be used for carrying out research in embedded systems, robotics, AI, sensor networks and RTOS domains. To find out more about FireBird V platform click here. </p>
                    
                    <p>Nex Robotics provides CCR and DSS architecture compliant services for controlling and observing states of all the sensors on FireBird V platform. The sensors and actuators on FireBird V platform can be programmed by using Visual Programming Language (VPL). Microsoft Visual Programming Language (VPL) enables you to create and debug complex robotics programs very easily. This enables a novice user with little to no coding experience to develop interesting applications on FireBird V platform. </p>
                    
                    <p>Nex robotics also offers the FireBird V platform as a “close to real life” simulation entity. Services are available in the simulation environment for sensors on FireBird V platform. Essentially, this allows a user to carry out initial experiments without using the actual hardware platform. Even if you have the hardware platform, it is always beneficial to test your algorithm/application in a realistic simulation environment provided by MRDS.</p>
                </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30"></div>
                <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
                <div className="cs-height_5 cs-height_lg_5"></div>
                <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <form action="#" className="row">
                <div className="col-lg-6">
                    <label>Full Name*</label>
                    <input type="text" className="cs-form_field" />
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-6">
                    <label>Email*</label>
                    <input type="text" className="cs-form_field" />
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-12">
                    <label>Website*</label>
                    <input type="text" className="cs-form_field" />
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-12">
                    <label>Write Your Comment*</label>
                    <textarea cols="30" rows="7" className="cs-form_field"></textarea>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                </div>
                <div className="col-lg-12">
                    <button className="cs-btn cs-style1">
                    <span>Send Message</span>
                    <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor" />
                    </svg>
                    </button>
                </div>
                </form>
            </div>
            <div className="col-xl-3 col-lg-4 offset-xl-1">
                <div className="cs-height_0 cs-height_lg_80"></div>
                <div className="cs-sidebar cs-right_sidebar cs-accent_5_bg_2">
                
                <div className="cs-sidebar_item widget_search">
                    <h4 className="cs-sidebar_widget_title">Search</h4>
                    <form className="cs-sidebar_search" action="#">
                    <input type="text" placeholder="Search..." />
                    <button className="cs-sidebar_search_btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="currentColor" />
                        </svg>
                    </button>
                    </form>
                </div>
                <div className="cs-sidebar_item widget_categories">
                    <h4 className="cs-sidebar_widget_title">Categories</h4>
                    <ul>
                    <li className="cat-item">
                        <a href="#">Corporate</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Company</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Search Engine</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Information</a>
                    </li>
                    <li className="cat-item">
                        <a href="#">Painting</a>
                    </li>
                    </ul>
                </div>
                <div className="cs-sidebar_item">
                    <h4 className="cs-sidebar_widget_title">Recent Posts</h4>
                    <ul className="cs-recent_posts">
                    <li>
                        <div className="cs-recent_post">
                        <a href="#" className="cs-recent_post_thumb">
                            <div className="cs-recent_post_thumb_in cs-bg" data-src="assets/images/recent_post_1.jpg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                            <h3 className="cs-recent_post_title">
                            <a href="#">How to studio setup...</a>
                            </h3>
                            <div className="cs-recent_post_date cs-primary_40_color">15 Aug 2022</div>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="cs-recent_post">
                        <a href="#" className="cs-recent_post_thumb">
                            <div className="cs-recent_post_thumb_in cs-bg" data-src="assets/images/recent_post_2.jpg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                            <h3 className="cs-recent_post_title">
                            <a href="#">Creative people mind...</a>
                            </h3>
                            <div className="cs-recent_post_date cs-primary_40_color">15 Aug 2022</div>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="cs-recent_post">
                        <a href="#" className="cs-recent_post_thumb">
                            <div className="cs-recent_post_thumb_in cs-bg" data-src="assets/images/recent_post_3.jpg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                            <h3 className="cs-recent_post_title">
                            <a href="#">AI take over human...</a>
                            </h3>
                            <div className="cs-recent_post_date cs-primary_40_color">15 Aug 2022</div>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="cs-recent_post">
                        <a href="#" className="cs-recent_post_thumb">
                            <div className="cs-recent_post_thumb_in cs-bg" data-src="assets/images/recent_post_4.jpg"></div>
                        </a>
                        <div className="cs-recent_post_info">
                            <h3 className="cs-recent_post_title">
                            <a href="#">You should now add...</a>
                            </h3>
                            <div className="cs-recent_post_date cs-primary_40_color">15 Aug 2022</div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="cs-sidebar_item widget_archive">
                    <h4 className="cs-sidebar_widget_title">Archives</h4>
                    <ul>
                    <li>
                        <a href="#">Archives</a>
                    </li>
                    <li>
                        <a href="#">15 Aug 2022</a>
                    </li>
                    <li>
                        <a href="#">20 Sep 2021</a>
                    </li>
                    <li>
                        <a href="#">11 Dec 2020</a>
                    </li>
                    <li>
                        <a href="#">25 jun 2020</a>
                    </li>
                    </ul>
                </div>
                
                </div>
            </div>
            </div>
        </div>
        </section>
    
        <div className="cs-height_150 cs-height_lg_80"></div>
    </div>
    </>
  )
}
