import { getDocumentsContent } from "@/lib/doc";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import { Suspense } from "react";
import LoadingDoc from "./loadingDoc";
import ContentSchemaScript from "@/meta/content-schema-scrpt";

const ContentDisplay = async ({ id }) => {
  const content = await getDocumentsContent(id);

  return (
    <Suspense fallback={<LoadingDoc />}>
      <ContentSchemaScript content={content} />
      <article className="prose dark:prose-invert mt-5 min-h-[63vh]">
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
          </div>
        </div>
        <h1>{content.title}</h1>
        <div>
          <span>Published On: {content.date}</span> by{" "}
          <Link href={`/author/${content.author}`}>{content.author}</Link> under
          the <Link href={`/categories/${content.id}`}>{content.category}</Link>{" "}
          category.
        </div>
        <div>
          {content.tags &&
            content.tags.map((tag) => <Tags key={tag} tag={tag} />)}
        </div>
        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: content.htmlContent }}
        />
      </article>
    </Suspense>
  );
};

export default ContentDisplay;
