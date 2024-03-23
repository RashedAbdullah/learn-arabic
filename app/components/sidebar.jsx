import Link from "next/link";
import React from "react";

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
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${doc.id}`}
            >
              <span className="truncate">{doc.title}</span>
            </Link>
            {nonRootDocs[doc.title] && (
              <ul role="list" style={{ opacity: 1 }}>
                {nonRootDocs[doc.title].map((subDoc) => (
                  <li key={subDoc.id}>
                    <Link
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={`/docs/${doc.id}/${subDoc.id}`}
                    >
                      <span className="truncate">{subDoc.title}</span>
                    </Link>
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
