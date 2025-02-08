import React from 'react';
import Image from 'next/image';
import { HiOutlineTrophy } from "react-icons/hi2";
import { PiSealCheckBold } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

function QualityBanner() {
  return (
    <div className="bg-[#FAF3EA] flex justify-center items-center p-4 space-x-8 w-screen h-[270px]">
      <div className="w-[1460px] h-[80px] flex justify-between">

        {/* High Quality */}
        <div className="flex items-center space-x-3">
          <HiOutlineTrophy className="w-[70px] h-[70px] text-black" />
          <div>
            <h3 className="font-semibold text-xl text-black">High Quality</h3>
            <p className="text-base font-medium leading-[30px] text-gray-600">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-3">
          <PiSealCheckBold className="w-[70px] h-[70px] text-black" />
          <div>
            <h3 className="font-semibold text-xl text-black">Warranty Protection</h3>
            <p className="text-base font-medium leading-[30px] text-gray-600">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center bg-[#FAF3EA] rounded">
            <Image src="/images/box.png" alt="Hand Icon" width={70} height={70} className="w-[70px] h-[70px]" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">Free Shipping</h3>
            <p className="text-base font-medium leading-[30px] text-gray-600">Order over $150</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-3">
          <RiCustomerService2Line className="w-[70px] h-[70px] text-black" />
          <div>
            <h3 className="font-semibold text-xl text-black">24 / 7 Support</h3>
            <p className="text-base font-medium leading-[30px] text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityBanner;