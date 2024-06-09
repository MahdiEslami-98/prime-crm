import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

const Toast = ({
  showToast,
  message,
  status,
}: {
  showToast: boolean;
  message: string;
  status: string;
}) => {
  return (
    <div
      className={`fixed bottom-0 flex items-center gap-x-3 rounded-[20px] border border-primary-03 bg-secondry-01 px-4 py-4 text-white transition-all duration-500 md:bottom-[5%] md:px-12 md:py-8 ${showToast ? "right-[5%] z-50 opacity-100" : "-right-[100%] opacity-0"}`}
    >
      <FaCircleInfo className={`h-8 w-8 ${status}`} />
      <p className="font-jost text-head6 font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
