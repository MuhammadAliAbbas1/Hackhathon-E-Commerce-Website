import Banner from '@/components/Banner'
import Shopbar from '@/components/Shopbar'
import React from 'react'
import Ourproducts from '@/components/Ourproducts';
import Qualitybanner from '@/components/Qualitybanner';


function page() {
  return (
    <div>
     <Banner Imagesrc='/images/banner.jpeg' title='Shop' title1='Home' title2='Shop' />
     <Shopbar />

     <div className='w-[1400px] h-[2051px] flex flex-col mx-auto'>

      <div className='w-full h-[446px] mt-[32px] flex gap-[88px]'>
       <Ourproducts title='Slytherine' title2='Stylish cafe chair' discount='Rp 3.500.000' price='Rp 2.500.000' imageSrc='/images/ourproducts1.png' />
       <Ourproducts title='Leviosa' title2='Stylish cafe chair' price='Rp 2.500.000' imageSrc='/images/ourproducts2.png' />
       <Ourproducts title='Lolito' title2='Luxury big sofa' discount='Rp 14.000.000' price='Rp 7.000.000' imageSrc='/images/ourproducts3.png' />
       <Ourproducts title='Respira' title2='Outdoor bar table and sofa' price='Rp 5500.000' imageSrc='/images/ourproducts4.png' />
      </div>
      <div className='w-full h-[446px] mt-[32px] flex gap-[88px]'>
       <Ourproducts title='Slytherine' title2='Stylish cafe chair' discount='Rp 3.500.000' price='Rp 2.500.000' imageSrc='/images/ourproducts1.png' />
       <Ourproducts title='Leviosa' title2='Stylish cafe chair' price='Rp 2.500.000' imageSrc='/images/ourproducts2.png' />
       <Ourproducts title='Lolito' title2='Luxury big sofa' discount='Rp 14.000.000' price='Rp 7.000.000' imageSrc='/images/ourproducts3.png' />
       <Ourproducts title='Respira' title2='Outdoor bar table and sofa' price='Rp 5500.000' imageSrc='/images/ourproducts4.png' />
      </div>
      <div className='w-full h-[446px] mt-[32px] flex gap-[88px]'>
       <Ourproducts title='Slytherine' title2='Stylish cafe chair' discount='Rp 3.500.000' price='Rp 2.500.000' imageSrc='/images/ourproducts1.png' />
       <Ourproducts title='Leviosa' title2='Stylish cafe chair' price='Rp 2.500.000' imageSrc='/images/ourproducts2.png' />
       <Ourproducts title='Lolito' title2='Luxury big sofa' discount='Rp 14.000.000' price='Rp 7.000.000' imageSrc='/images/ourproducts3.png' />
       <Ourproducts title='Respira' title2='Outdoor bar table and sofa' price='Rp 5500.000' imageSrc='/images/ourproducts4.png' />
      </div>
      <div className='w-full h-[446px] mt-[32px] flex gap-[88px]'>
       <Ourproducts title='Slytherine' title2='Stylish cafe chair' discount='Rp 3.500.000' price='Rp 2.500.000' imageSrc='/images/ourproducts1.png' />
       <Ourproducts title='Leviosa' title2='Stylish cafe chair' price='Rp 2.500.000' imageSrc='/images/ourproducts2.png' />
       <Ourproducts title='Lolito' title2='Luxury big sofa' discount='Rp 14.000.000' price='Rp 7.000.000' imageSrc='/images/ourproducts3.png' />
       <Ourproducts title='Respira' title2='Outdoor bar table and sofa' price='Rp 5500.000' imageSrc='/images/ourproducts4.png' />
      </div>
      <div className='w-[392px] h-[90px] flex justify-between items-end mx-auto mt-[40px]'>
        <div className='w-[60px] h-[60px] bg-[#B88E2F] flex items-center justify-center rounded'><p className='font-[400] text-lg text-white'>1</p></div>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center rounded'><p className='font-[400] text-lg text-black'>2</p></div>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center rounded'><p className='font-[400] text-lg text-black'>3</p></div>
        <div className='w-[98px] h-[60px] bg-[#F9F1E7] flex items-center justify-center rounded'><p className='font-[300] text-lg text-black'>Next</p></div>
      </div>

     </div>
     <Qualitybanner />

    </div>
  )
}

export default page
