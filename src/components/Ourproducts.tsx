
import React from "react";
import Image from "next/image";

interface OurProductProps {
  title: string;
  title2: string;
  price: string;
  discount?: string; // Optional for products without discounts
  imageSrc: string; // Pass image source dynamically
}

function OurProduct({ title, title2, price, discount, imageSrc }: OurProductProps) {
  return (
    <div className="w-[285px] h-full bg-[#F4F5F7]">
      <div className="w-[285px] h-[301px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="intrinsic"
          width={285}
          height={301}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="font-[600] text-[24px] leading-[28.8px] ml-[16px] mt-[16px] font-sans">
        {title}
      </p>
      <p className="mt-[8px] font-[500] text-[16px] leading-[24px] text-[#898989] ml-[16px] font-sans">
        {title2}
      </p>
      <div className="w-[249px] h-[30px] ml-[16px] mt-[8px] flex items-center">
        <p className="font-[600] text-[20px] leading-[30px] text-[#3A3A3A] font-sans">
          {price}
        </p>
        {discount && (
          <p className="font-[400] text-[16px] leading-[24px] line-through ml-[16px] font-sans">
            {discount}
          </p>
        )}
      </div>
    </div>
  );
}

export default OurProduct;
