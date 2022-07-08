import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineLinkedin, AiOutlinePicCenter, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2022 Pro Headphones All rights reserved ©</p>
        <p className='icons'>
          <AiFillInstagram/>
          <AiOutlineTwitter/>
          <AiFillFacebook/>
          <AiOutlineLinkedin/>
          <AiOutlineWhatsApp/>
          <AiFillYoutube/>
          
        </p>
    </div>
  )
}

export default Footer