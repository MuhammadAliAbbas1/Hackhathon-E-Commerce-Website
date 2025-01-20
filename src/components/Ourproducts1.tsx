import React from "react";
import Image from "next/image";

interface Ourproducts1Props {
  title: string;
  title2: string
  discount: string
}

function Ourproducts1(props: Ourproducts1Props) {
  return (
    <div className="w-[285px] h-full">
      <div className="w-[285px] h-[301px]">
        <Image
          src="/images/ourproducts1.png"
          alt="Dining"
          layout="intrinsic" 
          width={285}
          height={301}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans">
        {props.title}
      </p>
      <p className="mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans">
        {props.title2}
      </p>
      <div className="w-[249px] h-[30px] ml-[16px] mt-[8px] flex">
        <p className="font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans">
          Rp 2.500.000
        </p>
        <p className="font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans">
          {props.discount}
        </p>
      </div>
    </div>
  );
}

export default Ourproducts1;
