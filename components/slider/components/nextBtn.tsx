import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const NextBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className={`absolute -right-[25px] top-1/2 z-30 -translate-x-1/2 cursor-pointer rounded-full border border-[#464646] p-3 hover:border-white hover:text-white sm:p-[19px]`}
      onClick={onClick}
    >
      <div className="rounded-full bg-[#464646] p-3 sm:p-6">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default NextBtn;
