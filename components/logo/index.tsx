import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="z-20 flex items-center gap-x-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Logo.png" alt="" className="h-[55px] w-[55px]" />
      <span className={`text-head2 font-bold ${className}`}>PrimeCRM</span>
    </Link>
  );
};

export default Logo;
