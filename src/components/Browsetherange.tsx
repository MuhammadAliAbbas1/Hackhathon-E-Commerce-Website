import React from "react";

interface BrowsetherangeProps {
  title: string; 
}

function Browsetherange(props: BrowsetherangeProps) {
  return (
    <div className="w-[381px] h-[546px]">
      <div className="w-[381px] h-[480px] ">
        <img
          src="/images/dining.png"
          alt="Dining"
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
