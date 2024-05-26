"use client";
import Button from "@/components/button";
import Logo from "@/components/logo";
import { FaBars, FaX } from "react-icons/fa6";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

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
    name: "Licence",
    route: "/licence",
  },
  {
    name: "ChangeLog",
    route: "/changelog",
  },
];

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const themeChanger = () => {
    if (!isDark) {
      setIsDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="container relative mx-auto flex items-center justify-between px-4 pb-0 pt-[51px] font-jost ">
        <Logo />
        <div className="flex items-center">
          <nav className=" flex items-center">
            <ul className="hidden gap-x-[45px] lg:flex">
              {navInfo.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-head6 font-medium"
                    href={`${item.route}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={themeChanger}
              className="mr-4 cursor-pointer lg:ml-[45px] lg:mr-0"
            >
              {isDark ? (
                <IoMoon className=" h-6 w-6 " />
              ) : (
                <IoSunny className="h-6 w-6" />
              )}
            </div>
            <Button
              color="bg-primary-03"
              text="Login"
              className="ml-[45px] hidden px-[38px] py-3 text-head6 font-semibold text-white hover:bg-secondry-04 hover:text-primary-03 dark:bg-secondry-04 dark:text-primary-03 dark:hover:bg-primary-01 dark:hover:text-secondry-04 lg:block"
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
              <Button
                color="bg-primary-03"
                text="Login"
                className="rounded-[5px] px-4 text-white hover:bg-secondry-04 hover:text-primary-03"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
