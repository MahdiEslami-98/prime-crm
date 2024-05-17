import Button from "@/components/button";
import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="flex justify-between py-3 container mx-auto px-4">
      <Logo />
      <nav className="hidden items-center md:flex">
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
          className="text-white ml-[45px] px-[38px] py-3 text-head6 font-semibold"
        />
      </nav>
    </div>
  );
};

export default HeaderComponent;
