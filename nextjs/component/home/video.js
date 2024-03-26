"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function Video(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s"> 
            Intelligent Autonomous Transport Vehicle (IATV) </h2>
        </div>

          <div className="cs-height_70 cs-height_lg_70"></div>
          <div className="container autocar-text-center" onClick={handleShow}>
              
                <picture className="autocar-wrapper">
                  <source srcset="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/20_robot-delivery-2021-olg-1729.jpg?itok=XHzNXW1J" type="image/avif" />
                  <source srcset="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/20_robot-delivery-2021-olg-1729.jpg?itok=XHzNXW1J" type="image/webp" />
                  <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/20_robot-delivery-2021-olg-1729.jpg?itok=XHzNXW1J" alt="photo" />
                </picture>
               
          </div>

          <Modal  {...props} show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          
       
            <Modal.Body>
            <Button variant="secondary" className="btnClose" onClick={handleClose}></Button>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/TyaGli2Vfi4?si=4gOr9YRODMITYXER" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>
          </Modal>

      
          <div className="cs-height_145 cs-height_lg_80"></div>
      </div>
    </>
  )
}
