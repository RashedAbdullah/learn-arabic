import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocsByCategory } from "@/utils";
import React from "react";

const CategoryPage = ({ params: { category } }) => {
  const docs = getDocuments();
  const docByCategory = getDocsByCategory(docs, category);

  if (!docByCategory.length) {
    return <div>No documents found in this category.</div>;
  }

  const metaDescription = `Explore documents related to ${category} on our Arabic learning platform.`;

  return (
    <>
      <head>
        <title>{`Category: ${category} - Learn Arabic`}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`Arabic, ${category}, documents, learning`}
        />
        <meta property="og:title" content={`Category: ${category}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://learn-arabic.vercel.app/categories/${category}`}
        />
        <meta property="og:image" content="/learn-arabic.webp" />{" "}
      </head>
      <main>
        <ContentDisplay id={docByCategory[0].id} />
      </main>
    </>
  );
};

export default CategoryPage;
