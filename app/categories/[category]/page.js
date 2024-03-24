import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocsByCategory } from "@/utils";
import React from "react";

const CategoryPage = ({ params: { category } }) => {
  const docs = getDocuments();
  const docByCategory = getDocsByCategory(docs, category);
  return <ContentDisplay id={docByCategory[0].id} />;
};

export default CategoryPage;
