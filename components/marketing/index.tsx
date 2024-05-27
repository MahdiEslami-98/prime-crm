"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Input from "../input";
import Button from "../button";
import { motion } from "framer-motion";

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

const MarketingSection = () => {
  return (
    <>
      <div className="absolute right-0 top-[290%]">
        <img src="/images/Background.png" alt="" />
      </div>
      <div className="container flex gap-x-[76px] pt-[267px]">
        <div className="flex flex-col gap-y-[55px] py-[71px]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="pr-[88px]">
              <h3 className="pb-[17px] font-jost text-head2 font-semibold">
                Ways A Project Managment Tool Can Help Your Team
              </h3>
              <p className="font-open-sans text-head6">
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
          </motion.div>
          <div className="flex gap-x-[43px]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/icon (5).png" alt="" className="mb-[10px]" />
              <h4 className="pb-[9px] font-jost text-head4 font-medium">
                CRM Security
              </h4>
              <p className="font-open-sans text-head6">
                cards and make more sales while chatting
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <img src="/images/icon (4).png" alt="" className="mb-[21px]" />
              <h4 className="pb-[9px] font-jost text-head4 font-medium">
                Marketing Hub
              </h4>
              <p className="font-open-sans text-head6">
                Show off your goods in elegant product cards and mak.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <Button
              color="bg-primary-03"
              text="Get Started"
              className="px-[39px] py-[14px] font-jost text-head6 font-medium text-white ring-primary-03 transition-colors hover:bg-white hover:text-primary-03 hover:ring-2 dark:bg-primary-02 dark:text-primary-03 dark:hover:bg-secondry-04 dark:hover:text-primary-03"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="z-10 h-full w-full"
        >
          <div className="z-10 h-[702px] w-[699px]">
            <img src="/images/Image (2).png" alt="" className="h-full w-full" />
          </div>
        </motion.div>
      </div>
      <div className="container pt-[171px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          <div className="mx-[208.89px] text-center">
            <h3 className="pb-[9px] font-jost text-head2 font-semibold">
              Trusted by more than 75 million users globally
            </h3>
            <p className="mx-auto max-w-[679px] font-open-sans text-head6">
              Unique and powerful suite of software to run your entire business,
              brought to you transform the way you work.
            </p>
          </div>
        </motion.div>
        <div className="pt-6 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-center">
              {firstLine.map((item, index, array) => (
                <div
                  key={index}
                  className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-[#c5c5c5] dark:bg-white ${index === array.length - 1 ? "" : " border-r "} `}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-center">
              {secondLine.map((item, index, array) => (
                <div
                  key={index}
                  className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-b border-t border-[#c5c5c5] dark:bg-white ${index === array.length - 1 ? "" : " border-r "} `}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-center">
              {thirdLine.map((item, index, array) => (
                <div
                  key={index}
                  className={`flex min-h-[100px] min-w-[180px] items-center justify-center border-[#c5c5c5] dark:bg-white ${index === array.length - 1 ? "" : " border-r "} `}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container px-[100px] pt-[91px]">
        <div className="gradient_img h-[800px] rounded-[30px] bg-gradient-conic from-primary-03 to-[#141414] px-[80px] pt-[100px]">
          <div className="grid grid-cols-2 gap-x-[100px]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="text-white"
            >
              <h3 className="pb-[9px] font-jost text-head2 font-semibold">
                Sell | Serve | Automate
              </h3>
              <p className="font-open-sans text-head6">
                Boost enrolment and manage student lifecycle with our 360° CRM
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="pt-[30px]"
            >
              <label
                htmlFor="Email"
                className="mb-5 inline-block font-jost text-head6 text-white"
              >
                *Your Business Email Address
              </label>
              <div className="flex pb-[70px]">
                <Input
                  id="Email"
                  className="mr-[9px] h-full min-h-[77px] w-full rounded-[5px] px-[31px] py-[23px] font-open-sans outline-0"
                  placeholder="Email"
                />
                <Button
                  color="bg-primary-04"
                  text="Try Now"
                  className="min-h-[77px] text-nowrap px-[40px] py-[12px] font-jost text-head6 font-medium"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="col-span-2"
            >
              <img src="/images/sell-serve.png" alt="" className="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingSection;
