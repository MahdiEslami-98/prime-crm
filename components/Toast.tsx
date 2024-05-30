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
      className={`fixed bottom-[5%] right-[5%] z-50 flex items-center gap-x-3 rounded-[20px] border border-primary-03 bg-secondry-01 px-12 py-8 text-white transition-opacity ${showToast ? "opacity-100" : "opacity-0"}`}
    >
      <FaCircleInfo className={`h-8 w-8 ${status}`} />
      <p className="font-jost text-head6 font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
