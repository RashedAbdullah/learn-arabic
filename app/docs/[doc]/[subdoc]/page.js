import ContentDisplay from "@/app/components/contentDisplay";
import React from "react";

const SubDocs = ({ params: { subdoc } }) => {
  return <ContentDisplay id={subdoc}/>
};

export default SubDocs;
