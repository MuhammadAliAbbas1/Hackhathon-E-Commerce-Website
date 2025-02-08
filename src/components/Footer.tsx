import React from 'react'
import Link from 'next/link';


function Footer() {
  return (

    <div className='w-screen h-[505px]'>
      <div className='h-[419px] w-[1400px] ml-[100px] mb-[38px] mt-[48px]'>

        <footer className="h-[312px] w-[1287.18px] mb-[38px] mt-[48px] flex justify-between">
          <div className='h-[158px] w-[285px]'>
            <h2 className="text-[24px] font-[700] leading-[36px] font-sans text-[#000000]">Funiro.</h2>
            <address className="text-[16px] font-[400] leading-[24px] mt-[50px] font-sans text-[#9F9F9F] not-italic">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          <div className='flex w-[352px] h-[312px] justify-between'>
            <div className='h-[312px] w-[68px]'>
              <h3 className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] font-sans mb-[55px]">Links</h3>
              <ul className="font-[500] text-[16px] leading-[24px] text-[#000000] gap-[46px] flex flex-col font-sans">
                <Link href="/">
                Home
                </Link>
                <Link href="/Shop">
                Shop
                </Link>
                <Link href="/About">
                About
                </Link>
                <Link href="/Contact">
                Contact
                </Link>
              </ul>
            </div>

            <div className='h-[312px] w-[140px]'>
              <h3 className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] font-sans mb-[55px]">Help</h3>
              <ul className="font-[500] text-[16px] leading-[24px] text-[#000000] gap-[46px] flex flex-col font-sans">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
          </div>

          <div className="w-[286px] h-[101px]">
            <p className="text-[#9F9F9F] font-sans text-[16px] font-[500] leading-[24px]">
              Newsletter
            </p>

            <div className="flex items-center mt-[53px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="focus:outline-none underline underline-offset-[5px] decoration-black text-[#9F9F9F] font-sans text-[14px] font-[400] leading-[21px]"
              />
              <button className="focus:outline-none underline underline-offset-[5px] ml-9 text-black font-sans text-[14px] font-[500] leading-[21px]">
                SUBSCRIBE
              </button>
            </div>
          </div>


        </footer>
        <div className="w-full h-[2px] bg-[#D9D9D9] mt-2"></div>
        <div className="mt-[35px] font-[400] text-[16px] leading-[24px] text-black">
          2023 Funiro. All rights reserved
        </div>

      </div>
    </div>
  )
}

export default Footer
