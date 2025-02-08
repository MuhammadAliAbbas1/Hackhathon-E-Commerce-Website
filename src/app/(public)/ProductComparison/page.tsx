import Banner from '@/components/Banner'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <Banner title='Product Comparison' title1='Home' title2='Comparison' Imagesrc='/images/banner.jpeg' />
      <div className='flex mx-auto mt-[34px] w-[1219px] h-[290px]'>
        <div className='w-[223px] h-[159px] flex flex-col'>
            <p className='font-sans font-medium text-[28px]'>Go to Product <br /> page for more <br /> Products</p>
            <p className='text-[#727272] text-xl font-medium font-sans underline decoration-4 underline-offset-4'>View More</p>
        </div>
        <div className='ml-[75px]'>
          <Image src='/images/asgardsofa5.png' alt='sofa' width={280} height={177} className='w-[280px] h-[177] bg-[#F9F1E7] object-contain rounded-xl' />
          <p className='font-sans font-semibold text-xl mt-[18px]'>Asgaard Sofa</p>
          <p className='font-sans font-medium text-sm mt-[6px]'>Rs. 250,000.00</p>
          <div className='flex mt-[7px] items-center'>
            <p className='font-sans font-medium text-[18px]'>4.7</p>
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
            <div className='w-[1px] h-[30px] border-[1px] border[#9F9F9F]'></div>
            <p className='font-sans font-normal text-[13px] text-[#9F9F9F] ml-[9px]'>204 Review</p>  
          </div>
        </div>
        <div className='ml-[45px]'>
          <Image src='/images/asgardsofa5.png' alt='sofa' width={280} height={177} className='w-[280px] h-[177] bg-[#F9F1E7] object-contain rounded-xl' />
          <p className='font-sans font-semibold text-xl mt-[18px]'>Asgaard Sofa</p>
          <p className='font-sans font-medium text-sm mt-[6px]'>Rs. 250,000.00</p>
          <div className='flex mt-[7px] items-center'>
            <p className='font-sans font-medium text-[18px]'>4.7</p>
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
            <div className='w-[1px] h-[30px] border-[1px] border[#9F9F9F]'></div>
            <p className='font-sans font-normal text-[13px] text-[#9F9F9F] ml-[9px]'>204 Review</p>  
          </div>
        </div>
        <div className='w-[242px] h-[79px] flex flex-col justify-between ml-[87px]'>
          <p className='font-sans font-semibold text-base'>Add A Product</p>
          <div className='w-[242px] h-[39px] bg-[#B88E2F] flex items-center'>
            <p className='text-white font-sans font-semibold text-xs ml-[18px]'>Choose a Product</p>
            <p className="text-sm text-white ml-[50px] mb-[6px]">↓</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 p-2 text-left"></th>
        <th className="border border-gray-300 p-2 text-left"></th>
        <th className="border border-gray-300 p-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan={3} className="border border-gray-300 p-2 font-bold">General</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">State Postage</td>
        <td className="border border-gray-300 p-2">1 sectional axis</td>
        <td className="border border-gray-300 p-2">1 times instant, 2 single factor</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Mobile Number</td>
        <td className="border border-gray-300 p-2">ITCSB/IRBS/SPIRS</td>
        <td className="border border-gray-300 p-2">DTI/BID/RSI/SS</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Secondary Material</td>
        <td className="border border-gray-300 p-2">Split Wood</td>
        <td className="border border-gray-300 p-2">Split Wood</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Configuration</td>
        <td className="border border-gray-300 p-2">t–shaped</td>
        <td className="border border-gray-300 p-2">t–shaped</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Lymphony Material</td>
        <td className="border border-gray-300 p-2">Folate + Cotton</td>
        <td className="border border-gray-300 p-2">Folate + Cotton</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Lymphony Color</td>
        <td className="border border-gray-300 p-2">Right Grey & Lion</td>
        <td className="border border-gray-300 p-2">Right Grey & Lion</td>
      </tr>
      
      <tr>
        <td colSpan={3} className="border border-gray-300 p-2 font-bold">Product</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Piling Identical</td>
        <td className="border border-gray-300 p-2">Room</td>
        <td className="border border-gray-300 p-2">Mateo</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Photo Type</td>
        <td className="border border-gray-300 p-2">Right Grey & Lion</td>
        <td className="border border-gray-300 p-2">Right Grey & Lion</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Adjustable Readout</td>
        <td className="border border-gray-300 p-2">No</td>
        <td className="border border-gray-300 p-2">yes</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Melanum Local Capacity</td>
        <td className="border border-gray-300 p-2">230.00</td>
        <td className="border border-gray-300 p-2">200.00</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Origin of Manufacture</td>
        <td className="border border-gray-300 p-2">India</td>
        <td className="border border-gray-300 p-2">India</td>
      </tr>
      
      <tr>
        <td colSpan={3} className="border border-gray-300 p-2 font-bold">Dimensions</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Width</td>
        <td className="border border-gray-300 p-2">368.30 cm</td>
        <td className="border border-gray-300 p-2">368.30 cm</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Height</td>
        <td className="border border-gray-300 p-2">78 cm</td>
        <td className="border border-gray-300 p-2">76 cm</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Ospin</td>
        <td className="border border-gray-300 p-2">187.70 cm</td>
        <td className="border border-gray-300 p-2">187.70 cm</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Weight</td>
        <td className="border border-gray-300 p-2">49.90</td>
        <td className="border border-gray-300 p-2">55.90</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Seat Height</td>
        <td className="border border-gray-300 p-2">40.52 cm</td>
        <td className="border border-gray-300 p-2">41.52 cm</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Log Height</td>
        <td className="border border-gray-300 p-2">5.45 cm</td>
        <td className="border border-gray-300 p-2">5.45 cm</td>
      </tr>
      
      <tr>
        <td colSpan={3} className="border border-gray-300 p-2 font-bold">Warranty</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Warranty Summary</td>
        <td className="border border-gray-300 p-2">1 Year Manufacturing Warranty</td>
        <td className="border border-gray-300 p-2">12 Year Manufacturing Warranty</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Warranty Service Type</td>
        <td className="border border-gray-300 p-2">For Warranty Claims or Plan’s Please Find all opportunities and make it room</td>
        <td className="border border-gray-300 p-2">For Warranty Claims or Plan’s Please Find all opportunities and make it room</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Covenant in Warranty</td>
        <td className="border border-gray-300 p-2">Warranty Against Manufacturing Defect</td>
        <td className="border border-gray-300 p-2">Warranty of the product is intended to manufacture defects with*</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Plot Covenant in Warranty</td>
        <td className="border border-gray-300 p-2">The Warranty Does Not Cover? Complete Due To Usage Of The Product and Value to Intervene Data And Work at End? The Product Usage</td>
        <td className="border border-gray-300 p-2">The Warranty Does Not Cover Complete Due To Usage Of The Product and Value to Intervene Data And Work at End? The Product Usage</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Domestic Warranty</td>
        <td className="border border-gray-300 p-2">1 Year</td>
        <td className="border border-gray-300 p-2">3 Months</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2"></td>
        <td className="border border-gray-300 p-2">2021-01-04%</td>
        <td className="border border-gray-300 p-2">2021-01-04%</td>
      </tr>
    </tbody>
  </table>
</div>      
    </div>
  )
}

export default page
