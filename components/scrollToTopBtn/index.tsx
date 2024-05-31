"use client";
import React from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full border border-[#6c6c6c] text-[16px]"
      onClick={scrollToTop}
    >
      <FaAngleUp />
    </div>
  );
};

export default ScrollToTop;
