import React from 'react'
import Image from 'next/image'
import { Poppins } from '@next/font/google';
import '../globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add desired font weights
  variable: '--font-poppins', // Custom CSS variable
});

function Page() {
  return (
    <div className="relative">
      <div className="h-[1007.93px] w-screen top-[-75px]">
        {/* Image */}
        <div className="relative w-full h-[800.83px]">
          <Image
            className="top-[95.7px] absolute"
            src="/images/Hero.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />


          <div className="w-[643px] h-[443px] left-[739px] top-[253px] ml-20 mb-1 bg-[#FFF3E3] border-radius[10px] absolute flex items-center justify-center">
            <div className='w-[561] h-[344] top-[315px] left-[778px]  mt-5 '>

              <p className='font-semibold text-[1.10rem] font-sans tracking-[0.1em] w-[123px] h-[24px] top-[315px] left-[780px]'>New Arrival</p>


              <p className='text-[52px] text-[#B88E2F] font-[700] leading-[65px] w-[559px] h-[127px] top-[343px] left-[780px] mt-2 font-sans'>Discover Our <br /> New Collection</p>


              <p className='font-[500] text-[18px] leading-[24px] text-[#333333]j w-[546] h-[52] top-[487px] left-[780px] mt-3 font-sans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aperiam obcaecati voluptates non. </p>

              <button className='w-[222px] h-[74] top[585px] left-[778px]  flex items-center justify-center gap-[10px] bg-[#B88E2F] mt-12  text-[#FFFFFF] text-[16px] leading-[24px] font-[700] font-sans '>
                BUY NOW
              </button>
            </div>
          </div>
        </div>



        <div className='h-[685px] w-[1183px] top-[869px] left[131px] flex flex-col items-center mx-auto mt-[56.07px]'>
          <div className='w-[559px] h-[76.71px] top-[869] left-[449]  flex flex-col justify-center items-center'>

            <p className='font-[700] text-[32px] leading-[48px] text-[#333333] w-[300px] h-[48px]'>Browse The Range</p>


            <p className='font-[400] text-[20px] leading-[30px] text-center w-[559px] h-[28.71px] top-[917px] left-[449px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          </div>


          <div className='flex h-[546px] w-full gap-[20px] mt-[62.29px]'>

            <div className='w-[381px] h-[546px]'
            >
              <div className="w-[381px] h-[480px] ">
                <Image
                  src="/images/dining.png"
                  alt="Dining"
                  layout="omit"
                  width={381}
                  height={480}
                  className='h-[480px] w-[381px] object-cover'
                />
              </div>
              <p className='text-[24px] font-[600] text-[#333333] text-center mt-[30px] font-sans'>Dining</p>

            </div>

            <div className='w-[381px] h-[546px]'>

              <div className="w-[381px] h-[480px]">
                <Image
                  src="/images/living.png"
                  alt="Dining"
                  layout="omit"
                  width={381}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className='text-[24px] font-[600] text-[#333333] text-center mt-[30px] font-sans'>Living</p>

            </div>

            <div className='w-[381px] h-[546px]'>


              <div className="w-[381px] h-[480px]">
                <Image
                  src="/images/bedroom.png"
                  alt="Dining"
                  layout="omit"
                  width={381}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className='text-[24px] font-[600] text-[#333333] text-center mt-[30px] font-sans'>Bedroom</p>

            </div>
          </div>
        </div>

        <div className='w-[1236px] h-[1084px] border-[1px] flex flex-col mt-[56px] mx-auto'>
          <div className='w-full h-[48px] flex justify-center'>

            <p className='w-[269px] h-[48px] font-[700] text-[40px] leading-[48px] text-[#3A3A3A] font-sans'>Our Products</p>

          </div>

          <div className='w-full h-[446px] mt-[32px] flex gap-[33px]'>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts1.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Slytherine</p>
              <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Stylish cafe chair</p>
              <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                <p className='font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 2.500.000</p>
                <p className='font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans'>Rp 3.500.000</p>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts2.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Leviosa</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Stylish cafe chair</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 2.500.000</p>

                </div>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts3.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Lolito</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Luxury big sofa</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[19px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 7.000.000</p>
                  <p className='font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans'>Rp 14.000.000</p>
                </div>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts4.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Respira</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Outdoor bar table and stool</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[19px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 5.00.000</p>
                </div>
              </div>
            </div>


          </div>


          <div className='w-full h-[446px] mt-[32px] flex gap-[33px]'>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts5.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Grifo</p>
              <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Stylish cafe chair</p>
              <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                <p className='font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 2.500.000</p>
                <p className='font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans'>Rp 3.500.000</p>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts6.jpg"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Muggo</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Stylish cafe chair</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 2.500.000</p>

                </div>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts7.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Pingky</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Luxury big sofa</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[19px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 7.000.000</p>
                  <p className='font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans'>Rp 14.000.000</p>
                </div>
              </div>
            </div>


            <div className='w-[285px] h-full'>

              <div className="w-[285px] h-[301px]">

                <Image
                  src="/images/ourproducts8.png"
                  alt="Dining"
                  layout="omit"
                  width={285}
                  height={301}
                  className="h-full w-full object-cover"
                />
                <p className='font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans'>Potty</p>
                <p className='mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans'>Outdoor bar table and stool</p>
                <div className='w-[249px] h-[30px] ml-[16px] mt-[8px] flex'>

                  <p className='font-[600] text-[19px] leading-[30px] text-[#3A3A3A] font-sans'>Rp 5.00.000</p>
                </div>
              </div>
            </div>


          </div>
          <div className='w-[245px] h-[48px] flex justify-center items-center ml-[496px] mr-[495px] mt-[32px] border border-[#B88E2F]'>
            <p className='font-sans font-[600] text-[16px] text-[#B88E2F]'>Show More</p>
          </div>

        </div>
        <div className='relative h-[670px] bg-[#FCF8F3] w-[1440px] mt-[69px] flex  items-center mx-auto'>
          <div className='w-[422px] h-[151px] mt-[223px] mb-[351px] ml-[100px]'>
            <p className='font-[700] text-[40px] leading-[48px] text-[#3A3A3A] '>50+ Beautiful rooms <br />
              inspiration</p>
            <p className='font-[500] text-[16px] leading-[24px] text-[#616161] mt-[7px]'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <button className='w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] font-[600] text-[16px] leading-[24px] mt-[25px]'>Explore More</button>
          </div>
          <div className="relative w-[404px] h-[582px]">
            <Image
              src="/images/inner.png"
              alt="Dining"
              layout="fixed"
              width={404}
              height={582}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-[217px] h-[130px] blur-3 bg-[#FFFFFFB8] mt-[428px] ml-[24px] flex justify-center items-center">
              <div className='h-[64px] w-[168px] flex flex-col '>
                <div className='w-[142px] h-[24px] flex justify-center items-center'>
                  <p className='flex font-sans font-[500] text-[16px] leading-[24px] text-[#616161]'>01</p>
                  <div className='w-[27px] h-[1px] bg-[#616161] mr-[8px] ml-[8px]'></div>
                  <p className='flex font-sans font-[500] text-[16px] leading-[24px] text-[#616161]'>Bed Room</p>
                </div>
                <p className='font-sans font-[600] text-[28px] leading-[33.6px] text-[#3A3A3A]'>Inner Peace</p>
              </div>
            </div>
            <button className="bg-[#B88E2F] absolute top-0 left-0 ml-[241px] mt-[510px] flex items-center justify-center w-12 h-12 rounded">
              <div className="
                flex items-center space-x-1">
                <div className="w-[12px] h-[2px] bg-white"></div>
                <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-white"></div>
              </div>
            </button>

          </div>

          <div className='flex flex-col w-[372px] h-[582px] ml-[24px] '>



            <div className='w-[372px] h-[486px] '>
              <Image
                src="/images/sideinner.png"
                alt="Dining"
                layout="fixed"
                width={372}
                height={486}
                className="h-full w-full object-cover" />
            </div>

            <div className="flex items-center space-x-5 mt-[40px]">
              <div className="relative w-[27px] h-[27px] rounded-full border-[2px] border-[#D8D8D8] flex items-center justify-center">
                <div className="w-[11px] h-[11px] bg-[#B88E2F] rounded-full"></div>
              </div>

              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
            </div>



          </div>

          <div className='w-[93px] h-[486px] ml-[24px] mt-[44px] mb-[140px]'>
            <Image
              src="/images/ourproducts8.png"
              alt="Dining"
              layout="fixed"
              width={93}
              height={486}
              className="h-full w-full object-cover" />
          </div>

          <div className="absolute top-[323px] left-[1349px] mb-[323px] mr-[67px]">
            <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center border-[2px] border-[#B88E2F]">
              <div className="w-[24px] h-[24px] text-[#B88E2F] font-bold flex items-center justify-center">
                &gt;
              </div>
            </div>
          </div>


      
       



        </div>


      </div>

    </div>
  )
}
export default Page;





