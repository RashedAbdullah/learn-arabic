import fs, { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
  const filenames = readdirSync(postsDirectory);

  const allDocs = filenames.map((file) => {
    const id = file.replace(".md", "");
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);
    console.log(matterResult);
  });
};
