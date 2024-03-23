import Link from "next/link";
import React from "react";

const Tags = ({ tag }) => {
  return (
    <Link key={tag} href={`tags/${tag}`}>
      {tag}
    </Link>
  );
};

export default Tags;
