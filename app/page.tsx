/* eslint-disable @next/next/no-img-element */
import ExploreSection from "@/components/exploreSection";
import HeroSection from "@/components/hero";
import HowItWorkSection from "@/components/howWorkSection";
import MarketingSection from "@/components/marketing";
import SaleModuleSection from "@/components/saleModuleSection";
import SliderSection from "@/components/slidersection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <MarketingSection />
      <SaleModuleSection />
      <HowItWorkSection />
      <SliderSection />
      <div className="container pt-[152px]">
        <div className="flex flex-col items-center gap-y-[36px] text-primary-03">
          <div className="max-w-[871px] text-center">
            <h3 className="font-jost text-head2 font-semibold">
              Deliver End-To-End Retail Billing & Solutions
            </h3>
            <p className="font-open-sans text-head5 text-[#4e4e4e]">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="scribe_section h-[533px] w-full rounded-[30px]">
            <div className="px-[95px] pt-[118px]">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
