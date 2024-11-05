import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";

export const generateMetadata = ({ params }) => {
  const documents = getDocuments();
  const document = documents.find((doc) => doc.id === params.doc);

  return {
    title: document ? document.title : "Document Not Found",
    description: document
      ? document.description
      : "The requested document was not found.",
    keywords:
      document && Array.isArray(document.keywords)
        ? document.keywords.join(", ")
        : [],
    openGraph: {
      title: document ? document.title : "Document Not Found",
      description: document
        ? document.description
        : "The requested document was not found.",
      url: `https://learn-arabic.vercel.app/docs/${params.doc}`,
      images: document ? [document.imageUrl] : [],
    },
  };
};

const Page = ({ params: { doc } }) => {
  const documents = getDocuments();
  const document = documents.find((document) => document.id === doc);

  if (!document) {
    return <div>Document not found</div>;
  }

  return <ContentDisplay id={doc} />;
};

export default Page;
