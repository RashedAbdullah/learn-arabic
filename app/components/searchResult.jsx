/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SearchResult = ({ results, input, setInput }) => {
  const router = useRouter();

  const handlResult = (id) => {
    router.push(`/docs/${id}`);
    setInput("");
  };
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md p-4 bg-opacity-95 shadow-2xl bg-[#fafafa]">
      <p className="!text-lg">
        Showing results for
        <span className="font-semibold">"{input}":</span>
      </p>
      {results.length ? (
        <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
          {results.map((result) => (
            <li key={result.id} className="">
              <button
                className="transition-all hover:text-emerald-600"
                onClick={() => handlResult(result.id)}
              >
                {result.title}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <Image src="/not-found.png" alt="" height={500} width={600} />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
