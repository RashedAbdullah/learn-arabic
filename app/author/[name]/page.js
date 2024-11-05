import ContentDisplay from "@/app/components/contentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocsByAuthor } from "@/utils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const docByAuthor = getDocsByAuthor(docs, name);

  // Check if there are documents by the author
  if (!docByAuthor.length) {
    return <div>No documents found for this author.</div>;
  }

  const { title, description } = docByAuthor[0];
  const metaDescription = `${
    description || "Learn more about the works of "
  } ${name}`;

  return (
    <>
      <head>
        <title>{`Author: ${name} - Learn Arabic`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`Arabic, ${name}, author, documents`} />
        <meta property="og:title" content={`Author: ${name}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://learn-arabic.vercel.app/authors/${name}`}
        />
        <meta property="og:image" content="/learn-arabic.webp" />{" "}
      </head>
      <main>
        <ContentDisplay id={docByAuthor[0].id} />
      </main>
    </>
  );
};

export default AuthorPage;
