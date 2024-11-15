import React from 'react'
import Image from 'next/image'
import ContactImage from "@/app/assets/images/contact-pic.png"

const Contact = () => {
  return (
    <div>
      <div className='contact-heading'>
        <h1 className='contact-h1' data-aos="fade-down-right">Contact Me</h1>
        <div className='contact-divider' data-aos="zoom-out-left"></div>
      </div>
      <div className='contact'>
        <div className="contact-img" data-aos="flip-left" data-aos-duration="3000">
          <Image
            src={ContactImage}
            alt='Contact Me'
            width={231}
            height={346}
          />
        </div>

        <div className='form' data-aos="zoom-out-down">
          <input type='text' placeholder='Name*' className='text1' />
          <input type='email' placeholder='Email*' className='text1' />

          <textarea
            placeholder='Message*'
            rows={4}
            className='textarea'
          ></textarea>
          <button className='btn' data-aos="zoom-out-down" data-aos-duration="3000">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact