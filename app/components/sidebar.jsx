import Link from "next/link";
import React from "react";
import NavigateLink from "./Nagivate";

const SideBar = ({ docs }) => {
  const rootDocs = docs
    .filter((doc) => !doc.parent)
    .sort((a, b) => a.order - b.order);
  const nonRootDocs = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootDocs.map((doc) => (
          <li key={doc.id} className="relative">
            <NavigateLink
              classes="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white border-l-2"
              path={`/docs/${doc.id}`}
            >
              <span className="truncate">{doc.title}</span>
            </NavigateLink>
            {nonRootDocs[doc.title] && (
              <ul role="list" style={{ opacity: 1 }}>
                {nonRootDocs[doc.title].map((subDoc) => (
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
