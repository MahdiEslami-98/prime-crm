import React from "react";
import CustomSlider from "@/components/slider";

const SliderSection = () => {
  return (
    <div className="pt-[111px]">
      <div className="slider_section bg-primary-03 px-[232px] py-[144px]">
        <div className="container">
          <div className="">
            <CustomSlider />
          </div>
          <div className="flex justify-center gap-x-[200px] border-t border-[#999999] px-[28.22px] pt-[50px] text-white">
            <div>
              <h3 className="font-jost text-head2 font-semibold">
                4.9<span className="text-[#47cfff]">/</span>5
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                User Rating
              </p>
            </div>
            <div>
              <h3 className="font-jost text-head2 font-semibold">
                350<span className="text-[#ffb545]">K</span>+
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Customers
              </p>
            </div>
            <div>
              <h3 className="font-jost text-head2 font-semibold">
                99<span className="text-[#47dd56]">+</span>
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Team Members
              </p>
            </div>
            <div>
              <h3 className="font-jost text-head2 font-semibold">
                41<span className="text-[#ff5454]">M</span>
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Current Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
