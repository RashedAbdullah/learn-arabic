import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWithSideBar from "./components/header";
import { getDocuments } from "@/lib/doc";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Arabic",
  description: "A Arabic learning website",
};

export default function RootLayout({ children }) {
  const allDocs = getDocuments();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <div className="h-full lg:ml-72 xl:ml-80">
          <HeaderWithSideBar docs={allDocs} />
          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
