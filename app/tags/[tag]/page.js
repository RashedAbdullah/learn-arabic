import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocsByTags } from "@/utils";
import React from "react";

const TagPage = ({ params: { tag } }) => {
  const docs = getDocuments();
  const docByTag = getDocsByTags(docs, tag);
  return <ContentDisplay id={docByTag[0].id} />;
};

export default TagPage;
