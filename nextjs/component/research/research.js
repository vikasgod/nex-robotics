import React from 'react'
import Image from 'next/image'

export default function Research() {
  return (
    <>
      <div>
            
            <div className="container section-padding   ">
                <div className="row research-wrap">
                    <div className='col-lg-5'>
                        <div className='image-wrap'>
                            <Image src="/assets/images/IATV-NEX-Robotics.jpg" width={400} height={297}/>
                        </div>
                        
                    </div>
                    <div className="col-lg-7">
                        <div className='section-wrap'>
                            <h2 class="cs-post_title">Intelligent Autonomous Transport Vehicle (IATV)</h2>  
                            <p>NEX Robotics has designed Intelligent autonomous transport vehicle for transporting personals autonomously inside the campus and for advance research in mobile robotics.</p>
                            <p>Intelligent autonomous transport vehicle (IATV) is a 4-seater electric-powered vehicle retrofitted with sensors and actuators to make it fully autonomous. It can maneuver autonomously around the campus based on the fixed waypoints as well as it can be driven manually.</p>
                            <p>For autonomous navigation this vehicle primarily uses GPS, Inertial guidance and fluxgate magnetometers. Onboard computer estimates vehicle’s lateral and longitudinal position with the help of sensors. Any undesired deviation from the path is corrected in real time by steer by wire system.</p>
                            <p>The vehicle can be switched between auto and manual mode by engaging/disengaging steering actuator by pressing a button on the control panel. For the safety considerations, the top speed of the vehicle is limited to 20Km/ hour in the autonomous mode. On board different types of obstacle sensors provide collision avoidance in case IATV experiences any obstruction.</p>
                        </div>
                        
            
                    </div>
                   
                    
                </div>
            </div>
      </div>  
    </>
  )
}
