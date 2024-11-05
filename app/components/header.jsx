"use client";

import { useState } from "react";
import Image from "next/image";
import SideBar from "./sidebar";
import Logo from "./logo";
import Search from "./search";
import { Suspense } from "react";
import SidbeBarLoading from "./sidebarLoading";

const HeaderWithSideBar = ({ docs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  return (
    <header className="relative">
      {/* Dark overlay for the modal */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar} // Close sidebar when overlay is clicked
        ></div>
      )}

      {/* Sidebar and header */}
      <div className="fixed inset-y-0 left-0 z-40 flex flex-col w-72 overflow-y-auto lg:border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
        <Logo />
        <div className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-50 px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
          <div className="container flex h-14 items-center justify-between gap-12">
            <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>
            <Search docs={docs} />
            {/* Mobile Responsive Header Starts */}
            <div className="flex items-center gap-5 lg:hidden">
              <button
                type="button"
                onClick={toggleSidebar}
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
              >
                <Image
                  width={50}
                  height={100}
                  src="/hamburger.svg"
                  alt="Menu"
                  className="w-2.5 stroke-zinc-900 dark:stroke-white"
                />
              </button>
              <a aria-label="Home" href="/">
                <Image
                  width={50}
                  height={50}
                  src="/logo.png"
                  alt="Protocol"
                  className="h-6 w-6 object-cover rounded-full"
                />
              </a>
            </div>
            {/* Mobile Responsive Header Ends */}

            <div className="flex items-center gap-5">
              <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
              <div className="flex gap-4">
                <div className="contents lg:hidden">
                  <button
                    type="button"
                    className="focus:[&:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                    aria-label="Find something..."
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/search.svg"
                      alt="Search"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar with overlay */}
      <Suspense fallback={<SidbeBarLoading />}>
        <div
          className={`fixed inset-y-0 left-0 z-40 overflow-auto w-72 bg-white border-r border-zinc-900/10 px-6 pb-8 pt-4 transition-transform duration-300 lg:block lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar docs={docs} />
        </div>
      </Suspense>
    </header>
  );
};

export default HeaderWithSideBar;
