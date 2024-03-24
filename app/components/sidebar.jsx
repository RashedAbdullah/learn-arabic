/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import NavigateLink from "./Nagivate";
import { usePathname } from "next/navigation";
import { getDocsByAuthor, getDocsByCategory, getDocsByTags } from "@/utils";

const SideBar = ({ docs }) => {
  const pathName = usePathname();
  const [rootDocunetations, setRootDocumetations] = useState([]);
  const [nonRootDocumentations, setNonRootDocumentations] = useState({});

  useEffect(() => {
    let matchedDocs = docs;
    if (pathName.includes("/tags")) {
      const tag = pathName.split("/")[2];
      matchedDocs = getDocsByTags(docs, tag);
    } else if (pathName.includes("/author")) {
      const author = pathName.split("/")[2];
      matchedDocs = getDocsByAuthor(docs, author);
    } else if (pathName.includes("/categories")) {
      const category = pathName.split("/")[2];
      matchedDocs = getDocsByCategory(docs, category);
    }

    const rootDocs = matchedDocs
      .filter((doc) => !doc.parent)
      .sort((a, b) => a.order - b.order);
    const nonRootDocs = Object.groupBy(
      matchedDocs.filter((doc) => doc.parent),
      ({ parent }) => parent
    );

    // const nonRootKeys = Reflect.ownKeys(nonRootDocs);
    // nonRootKeys.forEach((key) => {
    //   const foundInRootDocs = rootDocs.find((doc) => doc.id === key);
    //   if (!foundInRootDocs) {
    //     const foundInDocs = docs.find((doc) => doc.id === key);
    //     rootDocs.push(foundInDocs);
    //   }
    // });

    setRootDocumetations([...rootDocs]);
    setNonRootDocumentations({ ...nonRootDocs });
  }, [pathName]);

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootDocunetations.map((doc) => (
          <li key={doc.id} className="relative">
            <NavigateLink
              classes="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white border-l-2"
              path={`/docs/${doc.id}`}
            >
              <span className="truncate">{doc.title}</span>
            </NavigateLink>
            {nonRootDocumentations[doc.title] && (
              <ul role="list" style={{ opacity: 1 }}>
                {nonRootDocumentations[doc.title].map((subDoc) => (
                  <li key={subDoc.id}>
                    <NavigateLink
                      classes="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border-l-2"
                      path={`/docs/${doc.id}/${subDoc.id}`}
                    >
                      <span className="truncate">{subDoc.title}</span>
                    </NavigateLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
