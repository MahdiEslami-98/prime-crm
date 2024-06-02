/* eslint-disable @next/next/no-img-element */
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <div className="relative hidden w-[60%] flex-col items-center justify-center pt-16 md:pt-12 lg:flex">
        <img
          src="/images/Login-Page.png"
          alt=""
          className="absolute bottom-0 left-0 w-[40%] opacity-70"
        />
        <img
          src="/images/Login-Page.png"
          alt=""
          className="absolute right-0 top-0 w-[40%] rotate-180 opacity-70"
        />
        <div className="relative z-10 pb-8">
          <p className="pb-6 text-[88px] font-bold">Welcome to</p>
          <div className="flex items-center gap-x-2">
            <img src="/images/Logo.png" alt="logo" />
            <p className="font-jost text-head2 font-bold">
              Prime{" "}
              <span className="bg-gradient-to-r from-primary-02 via-primary-01 to-[#8A6FFD] bg-clip-text text-transparent">
                CRM
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[40%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
