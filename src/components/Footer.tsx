import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className='footer'>
       @Foqia Siddiqui | All rights reserved.
    </div>
    <div className='icons'>

        <a href="https://www.linkedin.com/in/foqia-siddiqui-3357152b5/" target='blank' rel='noopener noreferrer'>
        <FaLinkedin size={30} className='icon' data-aos="zoom-in-up" data-aos-duration="4000"/>
        </a>

        <a href="https://www.facebook.com/profile.php?id=61562307717172" target='blank' rel='noopener noreferrer'>
        <FaFacebook size={30} className='icon' data-aos="zoom-in-up" data-aos-duration="4000"/>
        </a>

        <a href="https://www.instagram.com/foqia.sd78/" target='blank' rel='noopener noreferrer'>
        <FaInstagram size={30} className='icon' data-aos="zoom-in-up" data-aos-duration="4000"/>
        </a>

        <a href="https://github.com/Foqia-Sd" target='blank' rel='noopener noreferrer'>
        <FaGithub size={30} className='icon' data-aos="zoom-in-up" data-aos-duration="4000"/>
        </a>

    </div>
    </div>
  )
}

export default Footer