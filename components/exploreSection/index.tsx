/* eslint-disable @next/next/no-img-element */
import React from "react";

const ExploreSection = () => {
  return (
    <>
      <div className="absolute left-0 top-[190%] -z-20">
        <img src="/images/abs-right.png" alt="" />
      </div>
      <div className="flex flex-col gap-y-[29px] pt-[167px]">
        <div className="flex flex-col gap-y-[14px] text-center">
          <h3 className="font-jost text-head2 font-semibold">
            Explore Premium Features
          </h3>
          <p className="mx-auto max-w-[871px] font-open-sans text-head6">
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </div>
        <div className="flex gap-x-[44px]">
          <div className="flex flex-col items-start justify-center rounded-[10px] bg-secondry-03 px-[44px] py-[47px]">
            <div className="pb-[22px]">
              <img src="/icons/01.png" alt="" />
            </div>
            <p className="pb-[5px] font-jost text-head4 font-medium">
              Powerful Settings
            </p>
            <p className="font-open-sans text-head6">
              Provide excellent customer service. Answer more tickets.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center rounded-[10px] bg-white px-[44px] py-[47px] drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)]">
            <div className="pb-[22px]">
              <img src="/icons/02.png" alt="" />
            </div>
            <p className="pb-[5px] font-jost text-head4 font-medium">
              User Friendly
            </p>
            <p className="font-open-sans text-head6">
              Use Timeline to plan projects right how the pieces fit together.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center rounded-[10px] bg-secondry-03 px-[44px] py-[47px]">
            <div className="pb-[22px]">
              <img src="/icons/03.png" alt="" />
            </div>
            <p className="pb-[5px] font-jost text-head4 font-medium">
              Integrated platform
            </p>
            <p className="font-open-sans text-head6">
              Vivamus massa eleifend etiam neque odio feugiat dolor est.
            </p>
          </div>
        </div>
      </div>
      <div className="relative pt-[199.11px]">
        <div className="flex gap-x-[78px]">
          <div className="h-full w-full">
            <img src="/images/Image (3).png" alt="" className="h-full w-full" />
          </div>
          <div className="py-[45px]">
            <h3 className="font-jost text-head2 font-semibold">
              Allocate Leads and Simplify Lead Management
            </h3>
            <p className="font-open-sans text-head6">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
            <div className="flex flex-col gap-y-[30px] pt-[30px]">
              <div className="rounded-[30px] bg-gradient-to-r from-[#e0e0e0]/0 to-[#e0e0e0] p-px">
                <div className="flex items-start gap-x-[20px] rounded-[30px] bg-white px-[23px] py-[26px]">
                  <div className="mt-[11px] h-[21px] w-[21px] rounded-full border border-[#1eb1e5] bg-[#47cfff]"></div>
                  <div className="flex w-[90%] flex-col gap-y-[6px]">
                    <p className="font-jost text-head4 font-medium">
                      Lead generation
                    </p>
                    <p className="font-open-sans text-head6">
                      Guide Helps Companies Increase Customer & Agent
                      Satisfaction, Also Reducing Support Costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[30px] bg-gradient-to-r from-[#e0e0e0]/0 to-[#e0e0e0] p-px">
                <div className="flex gap-x-[20px] rounded-[30px]  bg-white px-[23px] py-[26px]">
                  <div className="mt-[11px] h-[21px] w-[21px] rounded-full border border-[#1eb1e5] bg-[#47cfff]"></div>
                  <div className="flex w-[90%] flex-col gap-y-[6px]">
                    <p className="font-jost text-head4 font-medium">
                      Team Email
                    </p>
                    <p className="font-open-sans text-head6">
                      Group Your Contacts By Location, Age, And Almost Any
                      Behavior With Advanced Segmentation Tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
