import Link from 'next/link'
import React from 'react'
import { IoMenuSharp } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className="navbar"> 
    <IoMenuSharp size={30} className='menu-icon'/>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="resume">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
