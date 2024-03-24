import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocsByAuthor } from "@/utils";
import React from "react";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const docByAuthor = getDocsByAuthor(docs, name);
  return <ContentDisplay id={docByAuthor[0].id} />;
};

export default AuthorPage;
