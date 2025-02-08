import Banner from '@/components/Banner'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BsFillClockFill } from "react-icons/bs";
import QualityBanner from '@/components/Qualitybanner';

function page() {
  return (
    <div>
       <Banner Imagesrc='/images/banner.jpeg' title='Contact' title1='Homr' title2='Contact' />
       <div className='w-[644px] h-[109px] flex flex-col justify-between mx-auto text-center mt-[98px]'>
         <h1 className='font-sans font-semibold text-3xl'>Get in Touch With Us</h1>
         <p className='font-sans font-normal text-base'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className='w-[1058px] h-[923px] mx-auto flex'>
        <div className='w-[393px] h-[537] mt-[82px] flex flex-col justify-center items-center'>
          <div className='w-[272px] h-[84px] flex'>
            <FaLocationDot className='w-[33px] h-[33px]' />
            <div className='ml-[30px]'>
              <p className='font-sans font-medium text-2xl'>Address</p>
              <p className='font-sans font-normal text-base'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className='w-[272px] h-[84px] flex  mb-[42px] mt-[42px]'>
            <FaPhone className='w-[30px] h-[30px]' />
            <div className='ml-[30px]'>
              <p className='font-sans font-medium text-2xl'>Phone</p>
              <p className='font-sans font-normal text-base'>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className='w-[272px] h-[120px] flex'>
            <BsFillClockFill className='w-[23px] h-[23px]' />
            <div className='ml-[30px]'>
              <p className='font-sans font-medium text-2xl'>Working Time</p>
              <p className='font-sans font-normal text-base'>Monday-Friday: 9:00 - <br /> 22:00</p>
              <p className='font-sans font-normal text-base'>Saturday-Sunday: 9:00 - <br /> 21:00</p>
            </div>
          </div>                         
        </div>
        <div className='w-[531px] h-[741px] mt-[133px] ml-[82px] flex flex-col justify-between'>
         <div className="space-y-3">
            <p className="font-sans font-medium text-base">Your Name</p>
            <div className="w-[528px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center"><p className='ml-[31px]'>Abc</p></div>
         </div>
         <div className="space-y-3">
            <p className="font-sans font-medium text-base">Email address</p>
            <div className="w-[528px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center"><p className='ml-[29px]'>Abc@def.com</p></div>
         </div>
         <div className="space-y-3]">
            <p className="font-sans font-medium text-base">Subject</p>
            <div className="w-[528px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center"><p className='ml-[29px]'>This is an optional</p></div>
         </div>
         <div className="space-y-3">  
            <p className="font-sans font-medium text-base">Message</p>
            <div className="w-[528px] h-[120px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal"><p className='mt-[26px] ml-[30px]'>Hi Id like to ask about</p></div>
         </div>
         <div className='w-[237px] h-[55px] rounded-md bg-[#B88E2F] border-[1px] flex justify-center items-center text-white font-sans font-normal text-base'>Sumbit</div>
        </div>
      </div>
      <QualityBanner />
     </div>
  )
}

export default page
