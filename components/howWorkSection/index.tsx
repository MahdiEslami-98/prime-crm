/* eslint-disable @next/next/no-img-element */
import React from "react";

const appDesc = [
  {
    title: "Download Our App",
    desc: "CentraHub CRM automatically logs in any reactions made by your leads, prospects",
  },
  {
    title: "List Your Company Detail",
    desc: "Customers making it easier for your sales team members audience they make contact.",
  },
  {
    title: "Enjoy Your Business",
    desc: "customers, making it easier for your sales team members audience before make contact.",
  },
];

const HowItWorkSection = () => {
  return (
    <div className="flex gap-x-[79px] pl-[260px] pt-[136px]">
      <div className="mx-auto max-w-full">
        <div className="grid grid-cols-hero gap-x-[76px]">
          <div className="flex flex-col gap-y-[37px]">
            <div>
              <h3 className="pb-[5px] font-jost text-head2 font-semibold">
                How It Works
              </h3>
              <p className="font-open-sans text-head6">
                Unique and powerful suite of software to run your business,
                brought to you by vision to you work.
              </p>
            </div>
            <div className="flex flex-col gap-y-[17px]">
              {appDesc.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[30px] bg-gradient-to-r from-[#e0e0e0]/0 to-[#e0e0e0] p-px"
                >
                  <div className="flex gap-x-[23px] rounded-[30px] bg-white px-[14px] py-[30px] dark:bg-primary-03">
                    <p className="font-jost text-head2 font-semibold text-[#47cfff]">
                      {"0" + (index + 1)}
                    </p>
                    <div>
                      <p className="pb-[9px] font-jost text-head4 font-medium text-primary-03 dark:text-white">
                        {item.title}
                      </p>
                      <p className="font-open-sans text-head6 text-[#4e4e4e] dark:text-[#9a9a9a]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mobile_app_section flex flex-col justify-center self-center rounded-l-[30px] bg-[#f6f6f6] pb-[85px] pl-[80px] pt-[115px]  ">
            <div className="max-w-[551px]">
              <h3 className="pb-[21px] font-jost text-head2 font-semibold text-primary-03">
                The Perfect CRM Software: Boost Your Field Sales Team’s
                Efficiency
              </h3>
              <p className="pb-[22px] font-open-sans text-head5 text-[#3ba3cb] ">
                Depending on the Sales Approaches Standardize a Marketing
                Process
              </p>
              <p className="font-open-sans text-head6 text-primary-03">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company.
              </p>
              <div className="mt-[20px] flex items-center gap-x-[26px]">
                <div>
                  <img src="/images/Apple.png" alt="" />
                </div>
                <div>
                  <img src="/images/Google.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
