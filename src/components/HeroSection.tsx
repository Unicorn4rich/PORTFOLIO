import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from './Button';

function HeroSection() {
  return (
    <>
      <section className='bg-[#cecbc7] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem]'>Hey! I'm 
          <span className='text-[#494846] font-semibold'> SHOAIB KHAN</span></p>

        <p className='text-[2rem]'>I 'm A FrontEnd Web Developer</p>

        <p className='mt-[1.25rem] mb-[2rem] text-[1.125rem] text-black'>I can build user interface for web sites and applications with React JS and Next.Js <br />I love the front end development.</p>

        <Button textName={"Hire Me"}/>

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#A9927D] rounded-full'>
          <FaFacebookF  size={30} color='white' className='cursor-pointer'/>
          <FaXTwitter size={30} color='white' className='cursor-pointer'/>
          <FaInstagram size={30} color='white' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='white' className='cursor-pointer'/>
          <FaTelegramPlane size={30} color='white' className='cursor-pointer'/>
          </div>

          <div className='mt-[70px] w-full bg-[#1a1a1a] h-[78px] flex justify-evenly items-center'>
            <Image src={"/myImage/behance.png"} alt='picture' width={156} height={52} className='cursor-pointer '></Image>
            <Image src={"/myImage/dribble.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myImage/upwork.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myImage/freelance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
          </div>
      </section>
    </>
  )
}

export default HeroSection