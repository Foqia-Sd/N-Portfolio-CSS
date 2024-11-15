import React from 'react'
import Image from 'next/image'
import AboutImage from "@/app/assets/images/about-pic.png"

const About = () => {
  return (
    <div className='about'>
      <div className='about-img' data-aos="fade-right">
        <Image 
        src={AboutImage} 
        alt='About Image' 
        width={600}
        height={600}
        /> 
      </div>

      <div className='about-text' data-aos="fade-left">
        <h2>About Me</h2>
        <p>I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects. My educational background has equipped me with a solid foundation in AI and ML algorithms, data analysis, and programming languages such as Python. Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively.</p>
      </div>

    </div>
  )
}

export default About