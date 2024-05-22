/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import ExploreSection from "@/components/exploreSection";
import HeroSection from "@/components/hero";
import Input from "@/components/input";
import MarketingSection from "@/components/marketing";

const saleModule = [
  {
    title: "In Need",
    items: [
      {
        title: "Sales",
        icon: "/icons/Icon.png",
      },
      {
        title: "Marketing",
        icon: "/icons/Icon (2).png",
      },
      {
        title: "Sales",
        icon: "/icons/Icon (3).png",
      },
    ],
  },
  {
    title: "Industry",
    items: [
      {
        title: "Automotive",
        icon: "/icons/Icon (4).png",
      },
      {
        title: "Real Estate",
        icon: "/icons/Icon (5).png",
      },
      {
        title: "Education",
        icon: "/icons/Icon (6).png",
      },
    ],
  },
  {
    title: "Solution",
    items: [
      {
        title: "Project Management",
        icon: "/icons/Icon (7).png",
      },
      {
        title: "Delivery Management",
        icon: "/icons/Icon (8).png",
      },
      {
        title: "Loyalty Management",
        icon: "/icons/Icon (9).png",
      },
      {
        title: "Professional Management",
        icon: "/icons/Icon (10).png",
      },
    ],
  },
];

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <MarketingSection />
      <div className="container pt-[432px]">
        <>
          <h3 className="pb-[10px] text-center font-jost text-head2 font-semibold">
            Sales Automation Modules
          </h3>
          <p className="mx-auto max-w-[893px] pb-[41px] text-center font-open-sans text-head6">
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </>
        <div className="rounded-[30px] border-2 border-dashed border-[#dbdbdb] px-[14px] py-[15px]">
          <div className="grid grid-cols-3 justify-items-start gap-x-[42px] rounded-[30px] bg-secondry-04 px-1 py-[57px]">
            {saleModule.map((item, index) => (
              <div className="flex flex-col items-start" key={index}>
                <div className="mb-[33px] rounded-[5px] bg-primary-03 px-[41px] py-[14px] text-center">
                  <h3 className=" font-jost text-head6 font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-y-[33px]">
                  {item.items.map((item, index, Array) => (
                    <div
                      key={index}
                      className={`flex items-center gap-x-[20px]`}
                    >
                      <div className="flex w-[20%] items-center justify-center rounded-full">
                        <img src={item.icon} alt="" className="h-full w-full" />
                      </div>
                      <div
                        className={`border-[#d9d9d9] pb-[21px] ${index === Array.length - 1 || "border-b"}`}
                      >
                        <p className="font-jost text-head5 font-medium">
                          {item.title}
                        </p>
                        <p className="font-open-sans text-[18px] text-[#4e4e4e]">
                          Unique and powerful suite sale run your entire
                          business
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-x-[79px] pl-[19%] pt-[136px]">
        <div className="flex flex-col gap-y-[37px]">
          <div>
            <h3 className="font-jost text-head2 font-semibold">How It Works</h3>
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
                <div className="flex gap-x-[23px] rounded-[30px] bg-white px-[14px] py-[30px]">
                  <p className="font-jost text-head2 font-semibold text-[#47cfff]">
                    {"0" + (index + 1)}
                  </p>
                  <div>
                    <p className="font-jost text-head4 font-medium text-primary-03">
                      {item.title}
                    </p>
                    <p className="font-open-sans text-head6 text-[#4e4e4e]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mobile_app_section bg-[#ebebeb] "></div>
      </div>
    </>
  );
}
