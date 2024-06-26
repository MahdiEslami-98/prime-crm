/* eslint-disable @next/next/no-img-element */
import React from "react";

const LicnsePage = () => {
  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="container pb-[215.16px] pt-[107px]">
        <div className="z-10 flex flex-col gap-y-[126px]">
          <div className="relative z-10 mx-auto max-w-[793px] text-center">
            <p className="pb-[14px] font-jost text-head2 font-semibold">
              Licenses
            </p>
            <p className="font-open-sans text-head6 text-[#4e4e4e] dark:text-[#9a9a9a]">
              All Graphical Assets In This Template Are Licensed For Personal
              And Commercial Use. If You’d Like To Use A Specific Asset, Please
              Check The Licenses Below.
            </p>
          </div>
          <div className="z-10 rounded-[30px] border-2 border-dashed border-[#dbdbdb] px-[14px] py-[15px] dark:border-[#999]">
            <div className="rounded-[30px] bg-[#f9f9f9] px-8 py-8 dark:bg-secondry-06 md:px-[86px] md:py-[88px]">
              <p className="pb-[17px] font-jost text-head2 font-semibold text-[#1b2534] dark:text-white">
                Icon & Graphics
              </p>
              <p className="pb-8 font-open-sans text-head6 text-[#606060] dark:text-[#aaa]">
                Icons and Graphics are manually designed by the
                <span className="font-bold text-[#8A6FFD]">
                  {" "}
                  VictorFlow{" "}
                </span>{" "}
                Templates team. You may download these and edit them to fit your
                website without asking for permission or providing credit.
              </p>
              <p className="pb-[38px] font-open-sans text-head6 text-[#606060] dark:text-[#aaa]">
                Upon purchasing Software UI Kit Template our team grants you a
                nonexclusive, worldwide copyright license to download, copy,
                modify, and use the icons.
              </p>
              <p className="font-jost text-head4 font-bold text-[#231656]">
                Phosphor icons : Licenses
              </p>
            </div>
          </div>
          <div className="z-10 rounded-[30px] border-2 border-dashed border-[#dbdbdb] px-[14px] py-[15px] dark:border-[#999]">
            <div className="flex flex-col gap-y-[38px] rounded-[30px] bg-[#f9f9f9] px-8 py-8 dark:bg-secondry-06 md:px-[86px] md:py-[88px]">
              <div>
                <p className="pb-[22px] font-jost text-head2 font-semibold text-[#1b2534] dark:text-white">
                  Photography
                </p>
                <p className="font-open-sans text-head6 text-[#606060] dark:text-[#aaa]">
                  All images used in the
                  <span className="font-bold">Primarily</span> Webflow Template
                  are licensed for free personal and commercial use. If youd
                  like to use any specific image, you can check the licenses and
                  download the images for free on
                  <span className="font-bold"> Unsplash </span> ,
                  <span className="font-bold"> Pexels‍ </span>..
                </p>
              </div>
              <div>
                <p className="pb-[22px] font-jost text-head4 font-semibold text-[#1b2534] dark:text-white">
                  Unsplash: License
                </p>
                <p className="font-open-sans text-head6 font-bold text-[#8a6ffd]">
                  Image 1, Image 2, Image 3.
                </p>
              </div>
              <div>
                <p className="pb-[22px] font-jost text-head4 font-semibold text-[#1b2534] dark:text-white">
                  Pexel: License
                </p>
                <p className="font-open-sans text-head6 font-bold text-[#8a6ffd]">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[30px] border-2 border-dashed border-[#dbdbdb] px-[14px] py-[15px] dark:border-[#999]">
            <div className="rounded-[30px] bg-[#f9f9f9] px-8 py-8 dark:bg-secondry-06 md:px-[86px] md:py-[88px]">
              <p className="pb-[17px] font-jost text-head2 font-semibold text-[#1b2534] dark:text-white">
                Font
              </p>
              <p className="font-open-sans text-head6 text-[#606060] dark:text-[#aaa]">
                <span className="font-bold text-[#8a6ffd]"> Primarily </span>
                template uses free licensed Google Fonts. Please check
                <span className="font-bold text-[#8a6ffd]"> Jost </span> and
                <span className="font-bold text-[#8a6ffd]"> Open Sans </span>.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[50%] lg:top-[35%]">
          <img src="/images/Background.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LicnsePage;
