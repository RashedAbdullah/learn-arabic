import Link from "next/link";
import React from "react";

const Tags = ({ tag }) => {
  return (
    <Link
      className="mr-2 bg-gray-200 p-1 rounded"
      key={tag}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  );
};

export default Tags;
