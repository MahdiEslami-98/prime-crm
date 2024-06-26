import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const PrevBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className={`absolute left-[13%] top-1/2 z-30 -translate-x-1/2 cursor-pointer rounded-full border border-[#464646] p-3 hover:border-white hover:text-white sm:p-[19px]`}
      onClick={onClick}
    >
      <div className="rounded-full bg-[#464646] p-3 sm:p-6">
        <FaAngleLeft />
      </div>
    </div>
  );
};

export default PrevBtn;
