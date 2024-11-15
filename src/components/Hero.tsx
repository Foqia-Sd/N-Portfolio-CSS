import React from 'react'
import Image from "next/image"
import Picture from "@/app/assets/images/profile.png"



const Hero = () => {
  return (
    <div className='hero'>

     <div className='img' data-aos="zoom-in-up">
      <Image 
      src={Picture} 
      alt='Profile Picture'
      width={350}
      height={350}
      />
    </div>

    <div className="intro" data-aos="fade-up">
      <p>Hey</p>
      <h2>I'm Foqia Siddiqui</h2>
      <h3>Machine Learning <span>Engineer</span> </h3>
      <p>A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</p>
    </div>

    <div className='btn' data-aos="fade-up">
      <button>Learn More</button>
      <button>Contact Me</button>
    </div>

    </div>
  )
}

export default Hero