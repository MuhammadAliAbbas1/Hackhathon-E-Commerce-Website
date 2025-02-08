import Banner from '@/components/Banner';
import QualityBanner from '@/components/Qualitybanner';
import React from 'react';

function page() {
  return (
    <div>
      <Banner
        title="Checkout"
        title1="Home"
        title2="Checkout"
        Imagesrc="/images/banner.jpeg"
      />
      <div className="w-[1242px] h-[1714px] flex mx-auto mt-[63px] justify-between mb-[52px]">
        {/* Left Section: Billing Details */}
        <div className="w-[608px] h-[1714px] flex flex-col justify-between">
          <p className="font-sans font-semibold text-4xl ml-[75px] mt-[35px]">
            Billing details
          </p>
          {/* Name Fields */}
          <div className="flex space-x-8">
            <div className="space-y-4 ml-[75px]">
              <p className="font-sans font-medium text-base">First Name</p>
              <div className="w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-xl"></div>
            </div>
            <div className="space-y-4">
              <p className="font-sans font-medium text-base">Last Name</p>
              <div className="w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-xl"></div>
            </div>
          </div>
          {/* Other Billing Fields */}
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Company Name (Optional)</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Country / Region</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center">
              <p className='ml-[31px]'>Sri Lanka</p>
            </div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Street address</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Town / City</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Province</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center ">
              <p className='ml-[31px]'>Western Province</p>
            </div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">ZIP code</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Phone</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px]">
            <p className="font-sans font-medium text-base">Email address</p>
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl"></div>
          </div>
          <div className="space-y-3 ml-[75px] mb-[71px]">
            <div className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-xl font-sans text-base text-[#9F9F9F] font-normal flex items-center">
              <p className='ml-[31px]'>Additional information</p>
            </div>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-[608px] h-[789px] flex justify-center items-center">
          <div className="w-[553px] h-[616px]">
            <div className="flex justify-between">
              <p className="font-sans font-medium text-2xl">Product</p>
              <p className="font-sans font-medium text-2xl">Subtotal</p>
            </div>
            <div className="flex justify-between mt-[14px]">
              <p className="font-sans font-normal text-base text-[#9F9F9F]">
                Asgaard sofa <span className="font-sans text-black font-medium text-xs">x 1</span>
              </p>
              <p className="font-sans font-light text-base">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mt-[22px]">
              <p className="font-sans font-normal text-base">Subtotal</p>
              <p className="font-sans font-light text-base">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mt-[22px]">
              <p className="font-sans font-normal text-base">Total</p>
              <p className="font-sans font-bold text-2xl text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
           <div>
            <div className='w-full h-[1px] border-[1px] border-[#D9D9D9] mt-[33.5px]'></div>
            <div className='flex gap-[15px] items-center mt-[22.5px]'>
              <div className='w-[14px] h-[14px] rounded-full bg-black'></div>
              <p className='font-normal font-sans text-base'>Direct Bank Transfer</p>
            </div>
            <p className='text-[#9F9F9F] font-light font-sans text-base mt-[11px]'>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>
            <div className='flex gap-[15px] items-center mt-[25px]'>
              <div className='w-[14px] h-[14px] rounded-full border-[#9F9F9F] border-[1px]'></div>
              <p className='font-medium font-sans text-base text-[#9F9F9F]'>Direct Bank Transfer</p>
            </div>
            <div className='flex gap-[15px] items-center mt-[11px]'>
              <div className='w-[14px] h-[14px] rounded-full border-[#9F9F9F] border-[1px]'></div>
              <p className='font-medium font-sans text-base text-[#9F9F9F]'>Cash on Delivery</p>
            </div>
            <p className='font-sans text-base font-light mt-[22px]'>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our <span className='font-sans font-semibold'>privacy policy.</span></p>
            <div className='w-[318px] h-[64px] flex items-center justify-center text-xl font-normal font-sans border-black border-[1px] rounded-2xl mt-[39px] mx-auto'>Place order</div>
           </div>
          </div>


        </div>
      </div>
      <QualityBanner />
    </div>
    
  );
}

export default page;
