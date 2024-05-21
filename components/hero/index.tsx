/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../button";

const HeroSection = () => {
  return (
    <>
      <div className="absolute right-[0%] top-[0%] -z-10">
        <img src="/images/abs-top.png" alt="" />
      </div>
      <div className="relative border-b border-[#dedede]">
        <div className="absolute left-[32%] top-[65%]">
          <img src="/images/tri1.png" alt="" />
        </div>
        <div className="absolute left-[28%] top-[10%]">
          <img src="/images/tri2.png" alt="" />
        </div>
        <div className="absolute -left-[12%] top-0 animate-spin3">
          <img src="/images/p1.png" alt="" />
        </div>
        <div className="absolute left-[40%] top-[40%] animate-spin2">
          <img src="/images/p2.png" alt="" />
        </div>
        <div className="absolute right-0 top-[15%] animate-pulse">
          <img src="/images/Ellipse 277.png" alt="" />
        </div>

        <div className="absolute right-[2%] top-[18%] -z-20 hidden animate-spin md:block">
          <img src="/images/Group 2485.png" alt="" />
        </div>
        <div className="absolute -left-[10%] top-[62%] -z-20 hidden animate-pulse md:block">
          <img src="/images/Ellipse 276.png" alt="" />
        </div>
        <div className="broder-b relative grid grid-cols-hero items-center border-[#dedede] pb-[56.21px] pt-[185px]">
          <div className="">
            <div className="mb-[34px]">
              <h1 className="pb-[21px] pr-[49px] font-jost text-head1 font-semibold">
                The CRM Platform Your Whole Business Will Love
              </h1>
              <p className="font-open-sans text-head5">
                Provide excellent customer service. Answer more tickets
                all-in-one Primarily software.
              </p>
            </div>
            <div className="mb-[76px] flex items-center gap-x-9 font-jost text-head6 font-semibold">
              <Button
                className="px-[39px] py-[14px] text-white  transition-colors hover:bg-white hover:text-primary-03 hover:ring-2 hover:ring-primary-03"
                color="bg-primary-03"
                text="Get Started"
              />
              <button className="text-primary-03 transition-colors hover:text-primary-01">
                How it works
              </button>
            </div>
            <hr className="mb-[56px] h-px border-0 bg-secondry-02 outline-0" />
            <div className="flex items-center">
              <img src="/images/star1.png" alt="" className="pr-[23px]" />
              <img src="/images/star3.png" alt="" />
              <div className="ml-[26.39px] mr-[22.16px] border-l border-[#c1c1c1] pl-[28.86px]">
                <p className="font-open-sans text-head3 font-bold">
                  5 Star Awards
                </p>
                <p className="pb-[7px] font-open-sans text-head6">
                  for customer services
                </p>
                <img src="/images/Star.png" alt="" />
              </div>
              <img src="/images/star2.png" alt="" />
            </div>
          </div>
          <div className="relative hidden h-full xl:block">
            <div className="absolute -top-[10%] left-[4%] h-[198.06px] w-[367.09px] rotate-[-21deg] rounded-[35px] shadow-xl">
              <img src="/images/e1.png" alt="" className="h-full w-full" />
            </div>
            <div className="absolute left-[19%] top-[18%] h-[339.09px] w-[305.12px] rotate-[-21deg] rounded-[30px] shadow-xl">
              <img src="/images/e2.png" alt="" className="h-full w-full" />
            </div>
            <div className="absolute left-[58%] top-[3%] h-[314.39px] w-[313.54px] rotate-[-21deg] rounded-[30px] shadow-xl">
              <img src="/images/e3.png" alt="" className="h-full w-full" />
            </div>
            <div className="absolute -top-[17%] left-[52%] h-[121.99px]  w-[249.58px] rotate-[-21deg] rounded-[30px] shadow-xl">
              <img src="/images/e4.png" alt="" className="h-full w-full" />
            </div>
            <div className="absolute left-[46%] top-[55%] h-[231.47px] w-[445.52px] rotate-[-21deg] rounded-[30px] shadow-xl">
              <img src="/images/e5.png" alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
