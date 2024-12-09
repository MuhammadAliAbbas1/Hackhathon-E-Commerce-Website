import React from 'react'

function Page() {
  return (
    <div className="relative">
      <div className='h-[1007.93px w-screen top-[-75px]'>
      {/* Image */}
      <img className="w-screen h-[800.83px] top-[95.7px]" src="/images/Hero.png" alt="Hero" />
    
      {/* Overlay div centered */}
      <div className="w-[643px] h-[443px] left-[739px] top-[253px] ml-20 mb-1 bg-[#FFF3E3] border-radius[10px] absolute flex items-center justify-center">
        <div className='w-[561] h-[344] top-[315px] left-[778px]  mt-5 '>
          <div className='w-[123px] h-[24px] top-[315px] left-[780px]'>
            <p className='font-semibold text-[1.10rem] font-sans tracking-[0.1em]'>New Arrival</p>
          </div>
          <div className='w-[559px] h-[127px] top-[343px] left-[780px] mt-2'>
           <p className='text-[52px] text-[#B88E2F] font-[700] leading-[65px]'>Discover Our <br /> New Collection</p>
          </div>
          <div className='w-[546] h-[52] top-[487px] left-[780px] mt-3'>
           <p className='font-[500] text-[18px] leading-[24px] text-[#333333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aperiam obcaecati voluptates non. </p>
          </div>
          <button className='w-[222px] h-[74] top[585px] left-[778px]  pt-[25px] pr-[72px] pb-[25px] pl-[72px] gap-[10px] bg-[#B88E2F] mt-12'>
            <div className=' text-[#FFFFFF] text-[16px] leading-[24px] font-[700]'>BUY NOW</div>
          </button>
        </div>
      </div>
      </div>
      <div className='h-[685px] w-screen flex justify-center items-center'>
      <div className='h-[685px] w-[1183px] top-[869px] left[131px] flex flex-col'>
        <div className='w-[1183px] h-[76.71px] flex flex-col justify-center items-center mt-8 '>
        <div className='w-[559px] h-[76.71px] top-[869] left-[449]  flex flex-col justify-center items-center'>
         <div className='w-[300px] h-[48px]-100'>
          <p className='font-[700] text-[32px] leading-[48px] text-[#333333]'>Browse The Range</p>
         </div>
         <div className='w-[559px] h-[28.71px] top-[917px] left-[449px]'>
           <p className='font-[400] text-[20px] leading-[30px] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
         </div>
        </div>
      </div>
 

      </div>
      </div>
    </div>
    
    
  )
}

export default Page
