/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/logo";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa6";
import React from "react";

const icons = [
  {
    src: "/images/Instagram.png",
    alt: "Instagram",
  },
  {
    src: "/images/Facebook.png",
    alt: "Facebook",
  },
  {
    src: "/images/Twiter.png",
    alt: "Twiter",
  },
  {
    src: "/images/Linked in.png",
    alt: "Linked in",
  },
  {
    src: "/images/Youtube.png",
    alt: "Youtube",
  },
];

const links = [
  {
    title: "Usefull Link",
    linksItem: [
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
    ],
  },
  {
    title: "Service",
    linksItem: [
      {
        name: "Sale",
        route: "#",
      },
      {
        name: "Markeing",
        route: "#",
      },
      {
        name: "Autimotive",
        route: "#",
      },
      {
        name: "Real Estate",
        route: "#",
      },
      {
        name: "Education",
        route: "#",
      },
    ],
  },
];

const contact = {
  address: "1700 W Blancke St, kiyev port south USA, American",
  phone: "+3255 456 789",
  email: "mail@primarily.com",
};

const FooterComponent = () => {
  return (
    <div className="bg-primary-03 font-jost">
      <div className="container mx-auto px-4 pt-6 md:pt-[124.75px]">
        <div className="block justify-between pb-[39.25px] md:flex">
          <Logo className="text-white" />
          <div className="flex items-center gap-x-[27px] pt-8 md:pt-0">
            {icons.map((item, index) => (
              <img key={index} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-3 pb-[57px] text-white md:grid-cols-3 xl:grid-cols-5 ">
          {links.map((item, index) => (
            <div className="" key={index}>
              <div className="border-y border-[#6c6c6c] py-[17px] text-head5 font-medium">
                {item.title}
              </div>
              <ul className="flex flex-col gap-y-[11px] pt-[48px]">
                {item.linksItem.map((item, index) => (
                  <li className="text-head6 font-medium" key={index}>
                    <Link href={item.route}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1">
            <div className="border-y border-[#6c6c6c] py-[17px] text-head5 font-medium">
              Contact Us
            </div>
            <div className="mr-[41px] pt-[48px]">
              <div className="mb-[22px] rounded-[20px] bg-gradient-to-r from-primary-03 to-[#6c6c6c] p-px">
                <div className="rounded-[20px] bg-primary-03 px-[21px] py-[19px] text-head6">
                  {contact.address}
                </div>
              </div>
              <div className="rounded-[20px] bg-gradient-to-r from-primary-03 to-[#6c6c6c] p-px">
                <div className="rounded-[20px] bg-primary-03 px-[21px] py-[19px] text-head6">
                  <p>{contact.phone}</p>
                  <p>{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <div className=" flex items-center justify-between border-y border-[#6c6c6c] py-[17px] text-head5 font-medium">
              <span>Our Latest News</span>
              <div className="flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#6c6c6c] text-[16px]">
                <FaAngleUp />
              </div>
            </div>
            <div className="relative mt-[48px]">
              <img src="/images/Image.png" className="w-full" alt="" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5px] bg-white/50 px-[44px] py-[14px] text-center text-head6 font-semibold text-black">
                Read More
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#6c6c6c] py-[27px] text-center text-head6 text-white">
          <p>Copyright © Primarly | Designed by VictorFlow Templates </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
