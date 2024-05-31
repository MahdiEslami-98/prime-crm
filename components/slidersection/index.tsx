"use client";
import React from "react";
import CustomSlider from "@/components/slider";
import { motion } from "framer-motion";

const SliderSection = () => {
  return (
    <div className="pt-[111px]">
      <div className="slider_section bg-primary-03 py-[144px] lg:px-[232px]">
        <div className="container">
          <div className="">
            <CustomSlider />
          </div>
          <div className="grid grid-cols-2 justify-center justify-items-center gap-x-[100px] border-t border-[#999999] pt-[50px] text-white md:flex lg:gap-x-[200px] lg:px-[28.22px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <h3 className="font-jost text-head2 font-semibold">
                4.9<span className="text-[#47cfff]">/</span>5
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                User Rating
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            >
              <h3 className="font-jost text-head2 font-semibold">
                350<span className="text-[#ffb545]">K</span>+
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Customers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            >
              <h3 className="font-jost text-head2 font-semibold">
                99<span className="text-[#47dd56]">+</span>
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Team Members
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            >
              <h3 className="font-jost text-head2 font-semibold">
                41<span className="text-[#ff5454]">M</span>
              </h3>
              <p className="font-open-sans text-head6 font-semibold">
                Current Users
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
