/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import NextBtn from "./components/nextBtn";
import PrevBtn from "./components/prevBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const CustomSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    initialSlide: 0,
    speed: 500,
  };
  return (
    <div className="slider-container w-full pb-[115px] text-center text-white">
      <Slider {...settings}>
        <div className="flex flex-col">
          <div className="mb-[20px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="inline-block overflow-hidden rounded-full"
            >
              <img src="/images/man.png" alt="" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="font-jost text-head2 font-semibold"
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="font-jost text-[85px]">"</span>Jennifer Stewart
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="font-open-sans text-head6"
            >
              Designer
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="mb-[20px] inline-block"
          >
            <img src="/images/Star.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[728px]"
          >
            <p className="font-open-sans text-head5">
              “ PrimeCRM Software Has Given Us A Centralized View On Our
              Business And Control In
              <span className="font-bold text-primary-01">
                {" "}
                Everything We Do{" "}
              </span>
              😇. It Help Us To Lead More Projects With Loyal Customers.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[20px]">
          <div className="mb-[20px]">
            <div className="inline-block overflow-hidden rounded-full">
              <img src="/images/man.png" alt="" />
            </div>
            <p className="font-jost text-head2 font-semibold">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="font-jost text-[85px]">"</span>Adam Chen
            </p>
            <p className="font-open-sans text-head6">Analyst</p>
          </div>
          <div className="mb-[20px] inline-block">
            <img src="/images/Star.png" alt="" />
          </div>
          <div className="mx-auto max-w-[728px]">
            <p className="font-open-sans text-head5">
              “ People Often Tell Us That
              <span className="font-bold text-primary-01">
                {" "}
                They Love The Chat{" "}
              </span>
              And Think It’s Modern – Something They Wouldn’t Have Expected From
              A Municipal Utility Company 😇.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[20px]">
          <div className="mb-[20px]">
            <div className="inline-block overflow-hidden rounded-full">
              <img src="/images/man.png" alt="" />
            </div>
            <p className="font-jost text-head2 font-semibold">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="font-jost text-[85px]">"</span>Bailey Thomas
            </p>
            <p className="font-open-sans text-head6">Developer</p>
          </div>
          <div className="mb-[20px] inline-block">
            <img src="/images/Star.png" alt="" />
          </div>
          <div className="mx-auto max-w-[728px]">
            <p className="font-open-sans text-head5">
              “ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found.
              Live Chat Obviously Made
              <span className="font-bold text-primary-01">
                {" "}
                Our Users Happier{" "}
              </span>
              And Our Service Department More Efficient.😇”
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
