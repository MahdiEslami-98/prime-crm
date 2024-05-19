/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import ColorCard from "@/components/color-card";
import React from "react";

const color = [
  {
    name: "Primary-01",
    hex: "49DEFF",
    class: "bg-primary-01",
  },
  {
    name: "Primary-02",
    hex: "4FFFDF",
    class: "bg-primary-02",
  },
  {
    name: "Primary-03",
    hex: "303030",
    class: "bg-primary-03",
  },
];

const color2 = [
  {
    name: "Secondry-01",
    hex: "4E4E4E",
    class: "bg-secondry-01",
  },
  {
    name: "Secondry-02",
    hex: "DEDEDE",
    class: "bg-secondry-02",
  },
  {
    name: "Secondry-03",
    hex: "F4F4F4",
    class: "bg-secondry-03",
  },
  {
    name: "Secondry-04",
    hex: "F9F9F9",
    class: "bg-secondry-04",
  },
];

const list = [
  "Efficiently myocardinate market-driven innovation.",
  "Idea-sharing with back end products.",
  "Ballpark value added activity to beta test",
  "Voluptate at dolores ut dolor ",
];

const ComponentsPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[735px] py-[149px] text-center">
        <p className="font-jost text-head2 font-semibold">Style Guide</p>
        <p className="font-open-sans text-head6">
          Primarily is our modern marketing agency Webflow Template. It was
          designed by the team of experts at VictorFlow.
        </p>
      </div>
      <div className="flex flex-col gap-y-[149px]">
        <div className="grid grid-rows-12 md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-3 md:row-span-1">
            Color
          </p>
          <div className="col-span-1 row-span-11 flex flex-col gap-y-[56px] pl-4 md:col-span-9 md:row-span-1">
            <div className="flex flex-wrap justify-center gap-x-[75px] gap-y-8 md:justify-start">
              {color.map((item) => (
                <ColorCard
                  key={item.hex}
                  name={item.name}
                  color={item.class}
                  colorName={item.hex}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-[75px] gap-y-8 md:justify-start">
              {color2.map((item) => (
                <ColorCard
                  color={item.class}
                  colorName={item.name}
                  name={item.hex}
                  key={item.hex}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-rows-12 md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-3">
            Text
          </p>
          <div className="row-span-11 flex flex-col gap-y-[48px] pl-4 font-jost md:col-span-9">
            <p className="text-[70px] font-bold">Display Text</p>
            <p className="text-head1 font-semibold">Heading 01 Text</p>
            <p className="text-head2 font-semibold">Heading 02 Text</p>
            <p className="text-head3 font-medium">Heading 03 Text</p>
            <p className="text-head4 font-medium">Heading 04 Text</p>
            <p className="text-head5 font-medium">Heading 05 Text</p>
            <p className="text-head6">Heading 06 Text</p>
          </div>
        </div>
        <div className="grid grid-rows-3 md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-5 lg:col-span-3">
            Paragraph
          </p>
          <div className="row-span-11 flex flex-col gap-y-[32px] pl-4 md:col-span-7 md:row-span-2 lg:col-span-9">
            <p className="font-open-sans text-head6">
              Veniam quae. Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
              repudiandae. Voluptate at dolores ut dolor sint occaecati
              similique. Velit eius ab delectus temporibus.
            </p>
            <p className="font-open-sans text-head6">
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Headings, paragraphs, block-quotes, figures, images, and
              figure captions can all be styled.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-3">
            List
          </p>
          <div className="row-span-2 pl-4 md:col-span-9 md:row-span-11">
            {list.map((item, index) => (
              <div className="flex items-center gap-x-[11px] py-3" key={index}>
                <img src="/icons/Group 2480.png" alt="" />
                <p className="text-lg] font-open-sans">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-3 md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-3">
            Block Quotes
          </p>
          <div className="relative row-span-2 grid h-[328px] w-full grid-cols-2 overflow-hidden rounded-[30px]  pl-4 md:col-span-9 lg:w-[872px]">
            <div className="bg-primary-01/70"></div>
            <div className="bg-primary-02/70"></div>
            <div className="col-span-2 bg-gradient-to-r from-primary-01/70 to-primary-02/70"></div>
            <div className="absolute bottom-1/2 left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                src="/icons/Pattern.png"
                alt=""
                className="mx-auto mt-4 inline-block"
              />
              <p className=" font-open-sans text-head6 font-semibold italic leading-[28px]">
                <span className="text-[71px]">W</span>hen an unknown
                printegalley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-3 font-jost md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-1 pl-12 font-jost text-[50px] font-semibold md:col-span-3">
            Button
          </p>
          <div className="row-span-2 flex flex-col flex-wrap gap-y-[50px] pl-4 md:col-span-9 md:row-span-1">
            <div className="flex justify-center gap-x-[20px] md:justify-start">
              <Button
                text="Default"
                color="bg-primary-03"
                className="px-[59px] py-[14px] text-head6 font-semibold text-white"
              />
              <Button
                text="Default"
                color="bg-primary-04"
                className="px-[59px] py-[14px] text-head6 font-semibold"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-x-[19px] gap-y-6 md:justify-start">
              <Button
                text="Default"
                color="bg-primary-03"
                className="px-[141px] py-[14px] text-head6 font-semibold text-white"
              />
              <Button
                text="Default"
                color="bg-secondry-05"
                className="px-[141px] py-[14px] text-head6 font-semibold"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-7 pb-[149px] md:grid-cols-12 md:grid-rows-1">
          <p className="row-span-2 pl-12 font-jost text-[50px] font-semibold md:col-span-3">
            Icons
          </p>
          <div className="row-span-5 flex flex-col gap-y-[30px] pl-4 md:col-span-9 md:row-span-1">
            <div className="flex items-center justify-center gap-x-[33px] md:justify-start">
              <img src="/icons/01.png" alt="" />
              <img src="/icons/02.png" alt="" />
              <img src="/icons/03.png" alt="" />
            </div>
            <div className="flex items-center justify-center gap-x-[40px] md:justify-start">
              <img src="/icons/01 (2).png" alt="" className="-ml-8" />
              <img src="/icons/02 (2).png" alt="" className="-ml-8" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-8 md:justify-start">
              <img src="/icons/Icon.png" alt="" />
              <img src="/icons/Icon (2).png" alt="" />
              <img src="/icons/Icon (3).png" alt="" />
              <img src="/icons/Icon (4).png" alt="" />
              <img src="/icons/Icon (5).png" alt="" />
              <img src="/icons/Icon (6).png" alt="" />
              <img src="/icons/Icon (7).png" alt="" />
              <img src="/icons/Icon (8).png" alt="" />
              <img src="/icons/Icon (9).png" alt="" />
              <img src="/icons/Icon (10).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
