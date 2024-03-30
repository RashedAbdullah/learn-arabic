import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          width={100}
          height={24}
          src="/logo.svg"
          alt="learn arabic"
          className="h-6 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
