import Button from "@/components/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mb-[75px] mt-[60px] rounded-[30px] bg-[#171717] py-[111.54px] text-center font-jost text-white md:mb-[150.48px] md:mt-[118.59px]">
      <div className="mx-auto flex max-w-[822px] flex-col gap-y-5">
        <p className="text-[150px] font-extrabold leading-[250px] sm:text-[200px] lg:text-[300px]">
          404
        </p>
        <p className="text-[35px] font-bold sm:text-[50px] lg:text-[75px]">
          Oops! Page not found
        </p>
        <p className="font-open-sans text-xs sm:text-base lg:text-head5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
          pretium faucibus leo nisl nulla pharetra nullam.
        </p>
        <Link href={"/"}>
          <Button
            color="bg-primary-03"
            text="Go to Homepage"
            className="bg-primary-04 px-[28px] py-[14px] text-head6 font-semibold text-primary-03"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
