import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";

export const generateMetadata = ({ params }) => {
  const documents = getDocuments();
  const document = documents.find((doc) => doc.id === params.subdoc);

  return {
    title: document ? document.title : "Sub-document Not Found",
    description: document
      ? document.description
      : "The requested sub-document was not found.",
    keywords:
      document && Array.isArray(document.keywords)
        ? document.keywords.join(", ")
        : [],
    openGraph: {
      title: document ? document.title : "Sub-document Not Found",
      description: document
        ? document.description
        : "The requested sub-document was not found.",
      url: `https://learn-arabic.vercel.app/docs/${params.doc}/${params.subdoc}`,
      images: document ? [document.imageUrl] : [],
    },
  };
};

const SubDocs = ({ params: { subdoc } }) => {
  const documents = getDocuments();
  const document = documents.find((doc) => doc.id === subdoc);

  if (!document) {
    return <div>Sub-document not found</div>;
  }

  return <ContentDisplay id={subdoc} />;
};

export default SubDocs;
