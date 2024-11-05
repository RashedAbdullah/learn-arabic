import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <h1 className="italic font-semibold text-xl"> Learn Arabic</h1>
      </Link>
    </div>
  );
};

export default Logo;
