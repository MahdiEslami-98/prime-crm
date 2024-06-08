import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center bg-[rgba(250,250,250,0.5)] text-[#30425e] backdrop:blur-[6px]">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
