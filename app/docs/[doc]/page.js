import ContentDisplay from "@/app/components/contentDisplay";
import React from "react";

const Page = ({ params: { doc } }) => {
  return <ContentDisplay id={doc} />;
};

export default Page;
