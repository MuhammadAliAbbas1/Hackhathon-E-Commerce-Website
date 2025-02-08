import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";




function Shopbar() {
  return (
    <div className='w-screen'>
      <div className='w-screen h-[100px] bg-[#F9F1E7] flex items-center justify-between'>

        <div className='w-[451px] h-[37px] flex items-center justify-between ml-[100px]'>
          <HiOutlineAdjustmentsHorizontal size={25} />
          <p className='font-[400] text-base ml-[12px]'>Filter</p>
          <HiSquares2X2 size={28} style={{marginLeft : '23px'}} />
          <TfiLayoutAccordionSeparated size={24} style={{marginLeft : '24px'}} />
          <div className="w-[1px] h-[37px] bg-black ml-[30px]"></div>
          <p className='font-[400] text-sm ml-[34px]'>Showing 1-16 of 32 results</p>        
        </div>

        <div className='w-[443px] h-[55px] flex items-center mr-[100px]'>
          <p className='font-[600] text-base'>Show</p>
          <input
            type="number"
            placeholder='16'
            className='font-[400] text-base text-[#9F9F9F] w-[55px] h-[55px] text-center ml-[17px]'
          />
          <p className='font-[600] text-base ml-[29px]'>Short by</p>
          <input
            type="text"
            placeholder='Default'
            className='font-[400] text-base text-[#9F9F9F] w-[188px] h-[55px] text-center ml-[17px]'
          />
        </div>

      </div>
    </div>
  )
}

export default Shopbar
