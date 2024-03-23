"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigateLink = ({ classes, path, children }) => {
  const pathename = usePathname();
  const active = pathename === path;
  console.log(active);
  return (
    <Link
      aria-current="page"
      className={`${classes} ${
        active ? "text-green-500 border-green-500" : ""
      }`}
      href={path}
    >
      {children}
    </Link>
  );
};

export default NavigateLink;
