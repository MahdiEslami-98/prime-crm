/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import ExploreSection from "@/components/exploreSection";
import HeroSection from "@/components/hero";
import Input from "@/components/input";

const firstLine = [
  "/images/brands/crossxy.svg",
  "/images/brands/bittorent.png",
  "/images/brands/vs.svg",
  "/images/brands/brand.svg",
];
const secondLine = [
  "/images/brands/bitmax.svg",
  "/images/brands/target.svg",
  "/images/brands/crypto.svg",
  "/images/brands/classic.svg",
  "/images/brands/upshot.svg",
];
const thirdLine = [
  "/images/brands/salebin.png",
  "/images/brands/kotak.png",
  "/images/brands/vunzo.png",
  "/images/brands/minti.png",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <div className="flex gap-x-[76px] pt-[267px]">
        <div className="absolute right-0 top-[290%] -z-10">
          <img src="/images/Background.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-[55px] py-[71px]">
          <div className="pr-[88px]">
            <h3 className="pb-[17px] font-jost text-head2 font-semibold">
              Ways A Project Managment Tool Can Help Your Team
            </h3>
            <p className="font-open-sans text-head6">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="flex gap-x-[43px]">
            <div>
              <img src="/images/icon (5).png" alt="" className="mb-[10px]" />
              <h4 className="pb-[9px] font-jost text-head4 font-medium">
                CRM Security
              </h4>
              <p className="font-open-sans text-head6">
                cards and make more sales while chatting
              </p>
            </div>
            <div>
              <img src="/images/icon (4).png" alt="" className="mb-[21px]" />
              <h4 className="pb-[9px] font-jost text-head4 font-medium">
                Marketing Hub
              </h4>
              <p className="font-open-sans text-head6">
                Show off your goods in elegant product cards and mak.
              </p>
            </div>
          </div>
          <div>
            <Button
              color="bg-primary-03"
              text="Get Started"
              className="px-[39px] py-[14px] font-jost text-head6 font-medium text-white hover:border-2 hover:border-primary-03 hover:bg-white hover:text-primary-03"
            />
          </div>
        </div>
        <div className="h-full w-full">
          <div className="h-[702px] w-[699px] ">
            <img src="/images/Image (2).png" alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="pt-[171px]">
        <div className="mx-[208.89px] text-center">
          <h3 className="pb-[9px] font-jost text-head2 font-semibold">
            Trusted by more than 75 million users globally
          </h3>
          <p className="mx-auto max-w-[679px] font-open-sans text-head6">
            Unique and powerful suite of software to run your entire business,
            brought to you transform the way you work.
          </p>
        </div>
        <div className="pt-6 ">
          <div className="flex justify-center">
            {firstLine.map((item, index, array) => (
              <div
                key={index}
                className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-[#c5c5c5] ${index === array.length - 1 ? "" : " border-r "} `}
              >
                <img src={item} alt="" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {secondLine.map((item, index, array) => (
              <div
                key={index}
                className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-b border-t border-[#c5c5c5] ${index === array.length - 1 ? "" : " border-r "} `}
              >
                <img src={item} alt="" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {thirdLine.map((item, index, array) => (
              <div
                key={index}
                className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-[#c5c5c5] ${index === array.length - 1 ? "" : " border-r "} `}
              >
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-[91px]">
        <div className="gradient_img h-[800px] rounded-[30px] bg-gradient-conic from-primary-03 to-[#141414] px-[117px] pt-[126px]">
          <div className="flex gap-x-[164px]">
            <div className="text-white">
              <h3 className="pb-[9px] font-jost text-head2 font-semibold">
                Sell | Serve | Automate
              </h3>
              <p className="font-open-sans text-head6">
                Boost enrolment and manage student lifecycle with our 360° CRM
              </p>
            </div>
            <div>
              <label htmlFor="Email" className="pb-[18px] text-white">
                *Your Business Email Address
              </label>
              <div className="flex items-center gap-x-[9px]">
                <Input
                  id="Email"
                  className="h-full rounded-[5px] px-[31px] py-[23px] font-open-sans outline-0"
                  placeholder="Email"
                />
                <Button
                  color="bg-primary-04"
                  text="Try Now"
                  className="text-nowrap px-[53px] py-[22px] font-jost text-head6 font-medium"
                />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
