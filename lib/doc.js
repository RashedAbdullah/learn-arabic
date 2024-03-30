import fs, { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
  const filenames = readdirSync(postsDirectory);

  const allDocs = filenames.map((file) => {
    const id = file.replace(".md", "");
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocs;
};

export const getDocumentsContent = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContent);
  const prossedContent = await remark().use(html).process(matterResult.content);
  const htmlContent = prossedContent.toString();
  return {
    id,
    htmlContent,
    ...matterResult.data,
  };
};
