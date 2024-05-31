"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

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
        icon: "/images/Icon(4).png",
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

const SaleModuleSection = () => {
  return (
    <div className="container pt-[60px] dark:text-primary-03 md:pt-[100px] lg:pt-[200px] xl:pt-[300px] 2xl:pt-[432px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      >
        <h3 className="pb-[10px] text-center font-jost text-head2 font-semibold dark:text-white">
          Sales Automation Modules
        </h3>
        <p className="mx-auto max-w-[893px] pb-[41px] text-center font-open-sans text-head6 dark:text-white">
          Unique and powerful suite of software to run your entire business,
          brought to you by a company with the long term vision to transform the
          way you work.
        </p>
      </motion.div>
      <div className="rounded-[30px] border-2 border-dashed border-[#dbdbdb] px-[14px] py-[15px]">
        <div className="grid grid-cols-1 justify-items-start gap-x-[42px] gap-y-16 rounded-[30px] bg-secondry-04 px-4 py-[57px] dark:bg-secondry-06 dark:text-white lg:grid-cols-3 lg:gap-y-0 lg:px-1">
          {saleModule.map((item, index) => (
            <div className="flex flex-col items-start" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                className="mb-[33px] rounded-[5px] bg-primary-03 px-[41px] py-[14px] text-center"
              >
                <h3 className=" font-jost text-head6 font-semibold text-white">
                  {item.title}
                </h3>
              </motion.div>
              <div className="flex flex-col gap-y-[33px]">
                {item.items.map((item, index, Array) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    key={index}
                    className={`flex items-center gap-x-[20px]`}
                  >
                    <div className="flex items-center justify-center rounded-full lg:w-[30%] xl:w-[20%]">
                      <img src={item.icon} alt="" className="h-full w-full" />
                    </div>
                    <div
                      className={`border-[#d9d9d9] pb-[21px] ${index === Array.length - 1 || "border-b"}`}
                    >
                      <p className="font-jost text-head5 font-medium">
                        {item.title}
                      </p>
                      <p className="font-open-sans text-[18px] text-[#4e4e4e] dark:text-[#aaa]">
                        Unique and powerful suite sale run your entire business
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleModuleSection;
