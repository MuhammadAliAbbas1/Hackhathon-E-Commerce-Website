import React from 'react';
import Image from 'next/image';
import { MdOutlineFacebook } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import Ourproducts from '@/components/Ourproducts';


function Page() {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="bg-[#F9F1E7] w-screen h-[100px] flex items-center">
        <div className="flex items-center ml-[99px] space-x-7">
          <div className="flex items-center space-x-2">
            <p className="text-base font-medium text-[#9F9F9F] font-sans">Home</p>
            <span className="text-xl">{'>'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-base font-medium text-[#9F9F9F] font-sans">Shop</p>
            <span className="text-xl">{'>'}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-px h-6 bg-black"></div>
            <p className="text-base font-normal text-black font-sans">Asgaard sofa</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[1241px] h-[820px] flex mx-auto mt-[32px]">
        {/* Image Section */}
        <div className="w-[524px] h-[500px] flex">
          <div className="w-[70px] h-[416px] flex flex-col space-y-8 items-center justify-center">
            <Image
              src="/images/asgardsofa1.png"
              alt="sofa thumbnail"
              width={76}
              height={80}
              className="w-[75px] h-[80px] bg-[#F9F1E7] rounded-xl"
            />
            <Image
              src="/images/asgardsofa2.png"
              alt="sofa thumbnail"
              width={76}
              height={80}
              className="w-[75px] h-[80px] bg-[#F9F1E7] rounded-xl"
            />
            <Image
              src="/images/asgardsofa3.png"
              alt="sofa thumbnail"
              width={76}
              height={80}
              className="w-[75px] h-[80px] bg-[#F9F1E7] rounded-xl"
            />
            <Image
              src="/images/asgardsofa4.png"
              alt="sofa thumbnail"
              width={74}
              height={44}
              className="w-[75px] h-[80px] bg-[#F9F1E7] rounded-xl"
            />
          </div>
          <Image
            src="/images/asgardsofa5.png"
            alt="main sofa image"
            width={423}
            height={500}
            className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-lg translate-x-[31px] object-contain"
          />
        </div>

        {/* Description Section */}
        <div className="w-[606.01px] h-[730px] translate-x-[82px]">
          <p className="font-[400] text-[42px] font-sans">Asgaard sofa</p>
          <p className="font-[500] text-2xl font-sans text-[#9F9F9F]">Rs. 250,000.00</p>
          <div className="flex space-x-5 space-y-3">
            <div className="flex items-center space-x-2">
              {/* Full Stars */}
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118L10 15.347l-3.974 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.672 9.101c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                ))}

              {/* Half Star */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <defs>
                  <clipPath id="half-star">
                    <rect x="0" y="0" width="10" height="20" />
                  </clipPath>
                </defs>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118L10 15.347l-3.974 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.672 9.101c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
                  clipPath="url(#half-star)"
                />
              </svg>
            </div>
            <div className="w-[1px] h-[30px] bg-black"></div>
            <p className="font-[400] text-[13px] text-[#9F9F9F] font-sans">5 Customer Review</p>
          </div>
          <p className="font-[400] text-[13px] font-sans text-black mt-[18px]">
            Setting the bar as one of the loudest speakers in its class, the <br />
            Kilburn is a compact, stout-hearted hero with a well-balanced <br />
            audio which boasts a clear midrange and extended highs for a <br />
            sound.
          </p>
          <p className="font-[400] text-sm font-sans text-[#9F9F9F] mt-[22px]">Size</p>
          <div className="w-[123px] h-[30px] flex justify-between mt-[12px]">
            <div className="w-[30px] h-[30px] bg-[#B88E2F] flex justify-center items-center text-white text-sm font-[400] font-sans rounded">
              L
            </div>
            <div className="w-[30px] h-[30px] bg-[#F9F1E7] flex justify-center items-center text-black text-sm font-[400] font-sans rounded">
              XL
            </div>
            <div className="w-[30px] h-[30px] bg-[#F9F1E7] flex justify-center items-center text-black text-sm font-[400] font-sans rounded">
              XS
            </div>
          </div>
          <p className="font-[400] text-sm font-sans text-[#9F9F9F] mt-[18px]">Color</p>
          <div className="w-[123px] h-[30px] flex justify-between mt-[12px]">
            <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full"></div>
            <div className="w-[30px] h-[30px] bg-[#000000] rounded-full"></div>
            <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-full"></div>
          </div>
          <div className="flex items-center gap-4 mt-[32px]">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#9F9F9F] rounded-md px-4 py-3 space-x-6">
              <button className="text-base font-sans">-</button>
              <span className="text-base font-sans">1</span>
              <button className="text-base font-sans">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="border border-black rounded-lg px-10 py-3 font-medium font-sans">
              Add To Cart
            </button>

            {/* Compare Button */}
            <button className="border border-black rounded-lg px-10 py-3 font-medium font-sans">
              + Compare
            </button>
          </div>
          <div className='w-[605px] h-[1px] bg-[#D9D9D9] border-[1px] mt-[60px]'></div>
          <div className='flex mt-[41px]'>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">SKU</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F] ml-[61px] mr-3">:</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">SS001</p>
          </div>
          <div className='flex mt-[12px]'>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Category</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F] ml-[21px] mr-3">:</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Sofas</p>
          </div>
          <div className='flex mt-[12px]'>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Tags</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F] ml-[54px] mr-3">:</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Sofa,Chair,Home,Shop</p>
          </div>
          <div className='flex mt-[12px]'>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]">Share</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F] ml-[48px] mr-3">:</p>
           <p className="font-[400] text-sm font-sans text-[#9F9F9F]"><span className='flex text-black text-xl space-x-4'><MdOutlineFacebook /><BiLogoLinkedinSquare /><AiFillTwitterCircle /></span></p>
          </div>
        </div>
      </div>
      <div className='w-screen h-[744px] flex flex-col items-center'>
        <div className='w-screen h-[1px] bg-[#D9D9D9] border-[1px] '></div>
        <div className='flex space-x-28 justify-center mt-[59px]'>
          <p className='text-2xl font-medium text-black font-sans'>Description</p>
          <p className='text-2xl font-normal text-[#9F9F9F] font-sans'>Additional Information</p>
          <p className='text-2xl font-normal text-[#9F9F9F] font-sans'>Reviews {'[5]'}</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-[37px]'>
           <p className='font-sans font-normal text-[#9F9F9F] text-base'>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />sound of Marshall, unplugs the chords, and takes the show on the road.</p>
           <p className='font-sans font-normal text-[#9F9F9F] text-base mt-[30px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='flex justify-between w-[1239px] items-center mt-[36px]'>
          <Image src='/images/bigsofa1.png' alt='bigsofa' width={605} height={348} className='w-[605px] h-[348px] bg-[#F9F1E7] object-cover rounded-md' />
          <Image src='/images/bigsofa2.png' alt='bigsofa' width={605} height={348} className='w-[605px] h-[348px] bg-[#F9F1E7] object-cover rounded-md' />
        </div>

      </div>

      <div className='w-screen h-[777px] flex flex-col items-center'>
        <p className='text-3xl font-medium font-sans mt-[55px]'>Related Products</p>
        <div className='w-[1400px] h-[446px] mt-[26px] flex gap-[88px]'>
       <Ourproducts title='Slytherine' title2='Stylish cafe chair' discount='Rp 3.500.000' price='Rp 2.500.000' imageSrc='/images/ourproducts1.png' />
       <Ourproducts title='Leviosa' title2='Stylish cafe chair' price='Rp 2.500.000' imageSrc='/images/ourproducts2.png' />
       <Ourproducts title='Lolito' title2='Luxury big sofa' discount='Rp 14.000.000' price='Rp 7.000.000' imageSrc='/images/ourproducts3.png' />
       <Ourproducts title='Respira' title2='Outdoor bar table and sofa' price='Rp 5500.000' imageSrc='/images/ourproducts4.png' />
        </div>
        <div className='w-[245px] h-[48px] flex justify-center items-center mt-[44px] border border-[#B88E2F] mx-auto'>
          <p className='font-sans font-[600] text-[16px] text-[#B88E2F]'>Show More</p>
        </div>

      </div>
      
    </div>
  );
}

export default Page;
