import React from "react";
import Image from "next/image"; // Make sure to import Image from next/image

interface Ourproducts2Props {
  title: string;
  title2: string;
}

function Ourproducts2(props: Ourproducts2Props) {
  return (
    <div className="w-[285px] h-full">
      <div className="w-[285px] h-[301px]">
        <Image
          src="/images/ourproducts2.png"
          alt="Dining"
          width={285}
          height={301}
          className="h-full w-full object-cover"
        />
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
        </div>
      </div>
    </div>
  );
}

export default Ourproducts2;
