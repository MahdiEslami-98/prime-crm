"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/button";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const starter = [
  {
    before: "Outbound email and ",
    span: "in-product",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "messaging",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "",
    span: "Push messages ",
    after: "& notifications",
    spanColor: "text-[#ffb545]",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Custom bots",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Mobile Carousels",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Banner messages",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "",
    span: "Multi-channel",
    after: " campaigns",
    spanColor: "",
    iconColor: "text-[#d0d0d0]",
  },
  {
    before: "A/B testing & control groups",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#d0d0d0]",
  },
];

const professional = [
  {
    before: "Outbound email and ",
    span: "in-product",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "messaging",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "",
    span: "Push messages ",
    after: "& notifications",
    spanColor: "text-[#ffb545]",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Custom bots",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Mobile Carousels",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Banner messages",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "",
    span: "Multi-channel",
    after: " campaigns",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "A/B testing & control groups",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Website traffic analytics",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Campaign reporting",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "",
    span: "Custom reporting",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
  {
    before: "Salesforce integration",
    span: "",
    after: "",
    spanColor: "",
    iconColor: "text-[#2fcf3f]",
  },
];

const PakagePriceSection = () => {
  return (
    <div className="container pt-[152px]">
      <div className="flex flex-col items-center gap-y-[36px] text-primary-03 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="max-w-[871px] text-center"
        >
          <h3 className="font-jost text-head2 font-semibold dark:text-white">
            Deliver End-To-End Retail Billing & Solutions
          </h3>
          <p className="font-open-sans text-head5 text-[#4e4e4e] dark:text-[#9a9a9a]">
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </motion.div>
        <div className="scribe_section mb-[770px] h-[533px] w-full rounded-[30px] px-[95px] pt-[118px]">
          <div className="flex gap-x-[64px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-x-[9px] pb-[8px] pl-[60px]">
                <img
                  src="/icons/Icon (12).png"
                  alt=""
                  className="h-[57px] w-[57px]"
                />
                <p className="font-jost text-head3">Starter</p>
              </div>
              <div className="rounded-[30px] bg-white px-[62px] py-[63px] drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)]">
                <div className="text-primary-03">
                  <h3 className="pb-[23px] font-jost text-head1  font-bold">
                    $45/Mo
                  </h3>
                  <p className="font-open-sans text-head6">
                    Includes <span className="font-bold">1,000</span> marketing
                    contacts. Additional marketing contacts are sold in
                    increments of <span className="font-bold">1,000</span> from
                  </p>
                </div>
                <div className="mt-[34px] flex flex-col gap-y-[20px] border-t border-[#ccc] pb-[18px] pt-[21px]">
                  {starter.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-[17px]">
                      <FaCheck className={`${item.iconColor} `} />
                      <p className="font-open-sans text-head6">
                        {item.before}
                        {item.span && (
                          <span className={`${item.spanColor} font-bold`}>
                            {item.span}
                          </span>
                        )}
                        {item.after}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  color="bg-secondry-05"
                  text="Get Started"
                  className="w-full py-[26px] font-jost font-semibold text-primary-03 hover:bg-primary-03 hover:text-white"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-x-[9px] pb-[8px] pl-[60px]">
                <img
                  src="/icons/Icon (11).png"
                  alt=""
                  className="h-[57px] w-[57px]"
                />
                <p className="font-jost text-head3">Professional</p>
              </div>
              <div className="rounded-[30px] bg-white px-[62px] py-[63px] drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)]">
                <div className="text-primary-03">
                  <h3 className="pb-[23px] font-jost text-head1  font-bold">
                    $60/Mo
                  </h3>
                  <p className="font-open-sans text-head6">
                    Includes <span className="font-bold">2,000</span> marketing
                    contacts. Additional marketing contacts are sold in
                    increments of <span className="font-bold">5,000</span> from
                  </p>
                </div>
                <div className="mt-[34px] flex flex-col gap-y-[20px] border-t border-[#ccc] pb-[18px] pt-[21px]">
                  {professional.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-[17px]">
                      <FaCheck className={`${item.iconColor} `} />
                      <p className="font-open-sans text-head6">
                        {item.before}
                        {item.span && (
                          <span className={`${item.spanColor} font-bold`}>
                            {item.span}
                          </span>
                        )}
                        {item.after}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  color="bg-primary-03"
                  text="Get Started"
                  className="w-full py-[26px] font-jost font-semibold text-white hover:bg-secondry-04 hover:text-primary-03"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakagePriceSection;
