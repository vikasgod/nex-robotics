import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <>
    
    <section>
        <div className="cs-height_150 cs-height_lg_80"></div>
            <div className="container">
                <div className="row">
                <div className="col-xl-5 col-lg-7">
                    <div className="cs-section_heading cs-style1">
                        <h3 className="cs-section_subtitle">About Our Agency</h3>
                        <h2 className="cs-section_title">Your trusted partner  for business </h2>
                        <div className="cs-height_30 cs-height_lg_20"></div>
                        <p>Nex Robotics Pvt Ltd. is a leading robotics design firm that develops world className robotic platforms. Our robot and UAV solutions are presently being used by ISRO, DRDO, BARC and IITs. Nex Robotics is the first adopter of Robot Operating System (ROS) enabled commercial platforms in India. A highly educated, experienced and dynamic team of management with proven track record is responsible for handling this activity.</p>

                        <div className="cs-height_25 cs-height_lg_40"></div>
                    </div>
                </div>
                <div className="col-lg-5 offset-xl-2">
                    <Image src="/assets/images/about_img_1.jpg" alt="Thumb" width={451} height={379} className="w-100 cs-radius_15" />
                    <div className="cs-height_25 cs-height_lg_25"></div>
                </div>
                
                <div className='col-lg-12'>
                    <p>Led by Dr. Anant Malewar, an IIT Bombay alumnus, the company is expanding its already diverse product line in emerging technologies such as artificial intelligence, remotely piloted vehicles and autonomous navigation. Mr. Sachitanand Malewar, an IIT Bombay research fellow, who has won more than 50 robotics competitions on national level and represented India as team leader in international contests such as Robocon, is a prolific robotics and UAV designer who is responsible for designing innovative solutions for complex problems. He has been instrumental in providing key solutions to many esteemed defense and research organizations.</p>
                </div>
                </div>
            </div>
        <div className="cs-height_75 cs-height_lg_55"></div>
    </section>
    
    </>
  )
}
