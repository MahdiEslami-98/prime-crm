import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const NextBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className={`absolute -right-[25px] top-1/2 -translate-x-1/2 cursor-pointer rounded-full border border-[#464646] p-[19px] hover:border-white hover:text-white`}
      onClick={onClick}
    >
      <div className="rounded-full bg-[#464646] p-6">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default NextBtn;
