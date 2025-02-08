import Image from "next/image";
import React from "react";

interface BrowsetherangeProps {
  title: string; 
}

function Browsetherange(props: BrowsetherangeProps) {
  return (
    <div className="w-[381px] h-[546px]">
      <div className="w-[381px] h-[480px] ">
        <Image
          src="/images/dining.png"
          alt="Dining"
          width={381}
          height={480}
          className="h-[480px] w-[381px] object-cover"
        />
      </div>
      <p className="text-[24px] font-[600] text-[#333333] text-center mt-[30px] font-sans">
        {props.title}
      </p>
    </div>
  );
}

export default Browsetherange;
