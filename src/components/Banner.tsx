import React from 'react'
import Image from 'next/image'

interface BannerProps {

  Imagesrc: string;
  title: string
  title1: string;
  title2: string;
}


function Banner({Imagesrc,title, title1, title2}: BannerProps) {
  return (
    <div>
        <div className='w-screen h-[316px] relative'>
         <Image
          className="top-[95.7px] h-[316px] blur-sm object-cover object-center"
          src={Imagesrc}
          alt="Hero"
          layout="omit"
          width={1600}
          height={316}
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
            <h2 className='font-[500] text-5xl font-sans'>{title}</h2>
            <p className='text-base font-[500] font-sans'>{title1}{">"} <span className='font-[300]'>{title2}</span></p>
          </div>
          </div>
    </div>
  )
}

export default Banner
