import ExploreSection from "@/components/exploreSection";
import HeroSection from "@/components/hero";
import HowItWorkSection from "@/components/howWorkSection";
import MarketingSection from "@/components/marketing";
import PakagePriceSection from "@/components/pakagePriceSection";
import SaleModuleSection from "@/components/saleModuleSection";
import SliderSection from "@/components/slidersection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <MarketingSection />
      <SaleModuleSection />
      <HowItWorkSection />
      <SliderSection />
      <PakagePriceSection />
    </>
  );
};

export default Home;
