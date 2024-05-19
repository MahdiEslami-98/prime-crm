"use client";
import Button from "@/components/button";
import Logo from "@/components/logo";
import { FaBars, FaX } from "react-icons/fa6";
import Link from "next/link";
import React, { useState } from "react";

const navInfo = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Blog",
    route: "/blog",
  },
  {
    name: "Components",
    route: "/components",
  },
  {
    name: "ChangeLog",
    route: "/changelog",
  },
];

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container relative mx-auto flex items-center justify-between px-4 py-3">
      <Logo />
      <nav className="hidden items-center lg:flex">
        <ul className="flex gap-x-[45px]">
          {navInfo.map((item, index) => (
            <li key={index}>
              <Link className="text-head6 font-medium" href={`${item.route}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          color="bg-primary-03"
          text="Login"
          className="ml-[45px] px-[38px] py-3 text-head6 font-semibold text-white"
        />
      </nav>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-[5px]  p-4 active:ring-1 active:ring-primary-01 lg:hidden"
        >
          <FaBars className="h-8 w-8" />
        </button>
      )}
      {isOpen && (
        <button
          className="rounded-[5px] p-4 active:outline-1 active:ring-1 active:ring-primary-01 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaX className="h-8 w-8" />
        </button>
      )}
      {isOpen && (
        <div className="md:w1/2 absolute left-1/2 right-1/2 top-full z-10 grid h-[270px] w-[90%] -translate-x-1/2 animate-fadeIn grid-cols-1 rounded-[5px] border border-[6c6c6c] bg-white p-4 shadow-md md:h-[150px] md:grid-cols-2 lg:hidden">
          {navInfo.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className="flex items-center rounded-[5px] px-4 hover:bg-primary-04/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
