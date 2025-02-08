import Banner from '@/components/Banner'
import React from 'react'
import Image from 'next/image';
import QualityBanner from '@/components/Qualitybanner';
import Link from 'next/link';

function cart() {
  return (
    <div>
      <Banner Imagesrc='/images/banner.jpeg' title='Cart' title1='Home' title2='Cart' />
      <div className='w-[1240px] h-[390px] flex mx-auto mt-[72px] mb-[85px] justify-between'>
        <div className='w-[817px] h-[215px] flex flex-col justify-between'>
          <div className='bg-[#F9F1E7] flex w-full h-[55px] justify-center items-center space-x-24'>
            <p className='font-[500] text-base font-sans ml-10'>Product</p>
            <p className='font-[500] text-base font-sans'>Price</p>
            <p className='font-[500] text-base font-sans'>Quantity</p>
            <p className='font-[500] text-base font-sans'>Subtotal</p>
          </div>
          <div className='flex items-center justify-between'>
            <Image
             src='/images/asgardsofa5.png'
             alt='sofa'
             width={108}
             height={105}
             className='w-[108px] h-[105px] bg-[#F9F1E7] object-contain rounded-lg'
            />
            <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Asgard sofa</p>
            <p className="font-[400] text-sm font-sans text-[#9F9F9F] ml-5">Rs. 250,000.00</p>
            <div className='flex justify-center items-center rounded-md border-[#9F9F9F] border-[1px] font-sans font-normal text-base w-[30px] h-[30px] mr-10'>1</div>
            <p className="text-sm font-sans text-black font-normal">Rs. 250,000.00</p>
            <Image
             src='/images/dustbin.png'
             alt='dustbin'
             width={28}
             height={28}
             className='w-7 h-7 mr-[25px]'
            />

          </div>
        </div>
        <div className='w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col items-center'>
          <p className='font-semibold text-4xl font-sans mt-[15px]'>Cart Totals</p>
          <p className='font-sans font-medium text-base mt-[61px]'>Subtotal<span className='font-sans font-normal text-base text-[#9F9F9F] ml-[62px]'>Rs. 250,000.00</span></p>
          <p className='font-sans font-medium text-base mt-[31px]'>Total<span className='font-sans font-medium text-xl text-[#B88E2F] ml-[58px]'>Rs. 250,000.00</span></p>
          <Link href='/Checkout'>
          <div className='w-[222px] h-[58.95px] rounded-xl border-[1px] border-black flex justify-center items-center font-sans font-normal text-xl mt-[42px]'>Check Out</div>
          </Link>
        </div>
      </div>
      <QualityBanner />
    </div>
  )
}

export default cart
