import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const PrevBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className={`absolute -left-[25px] top-1/2 -translate-x-1/2 cursor-pointer rounded-full border border-[#464646] p-[19px] hover:border-white hover:text-white`}
      onClick={onClick}
    >
      <div className="rounded-full bg-[#464646] p-6">
        <FaAngleLeft />
      </div>
    </div>
  );
};

export default PrevBtn;
