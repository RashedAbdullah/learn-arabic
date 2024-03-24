"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchResult from "./searchResult";
import useDebounce from "@/hooks/useDebounce";

const Search = ({ docs }) => {
  const [input, setInput] = useState("");
  const [result, setResutl] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    doSearch(e.target.value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    );
    setResutl(found);
  }, 1000);
  console.log(result);
  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
      >
        <Image
          width={50}
          height={100}
          src="/search.svg"
          alt="serach icon"
          className="h-5 w-5"
        />
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          className="flex-1 focus:border-none focus:outline-none"
        />
        <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      {input && input.trim().length > 0 && (
        <SearchResult results={result} input={input} setInput={setInput}/>
      )}
    </div>
  );
};

export default Search;
