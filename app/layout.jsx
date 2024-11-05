import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWithSideBar from "./components/header";
import { getDocuments } from "@/lib/doc";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Arabic",
  description: "A comprehensive Arabic learning website",
  generator: "Next.js",
  applicationName: "Learn Arabic",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Learn Arabic",
    "Arabic language",
    "Arabic script",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
  creator: "Rashed Abdullah",
  publisher: "Rashed Abdullah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://learn-arabic.vercel.app"), // Add this line
  openGraph: {
    title: "Learn Arabic",
    description: "A comprehensive Arabic learning website",
    url: "https://learn-arabic.vercel.app",
    images: [
      {
        url: "/learn-arabic.webp",
        width: 800,
        height: 600,
        alt: "Learn Arabic",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Learn Arabic",
  url: "https://learn-arabic.vercel.app",
  sameAs: [
    "https://www.rashedabdullah.com",
    "https://www.facebook.com/Rashed4Abdullah",
    "https://www.linkedin.com/in/rashed4abdullah/",
    "https://www.instagram.com/rashed4abdullah",
  ],
};

export default function RootLayout({ children }) {
  const allDocs = getDocuments();

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
          crossorigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-6921856465558245" />
        <link rel="canonical" href="https://learn-arabic.vercel.app" />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        <div className="h-full lg:ml-72 xl:ml-80">
          <HeaderWithSideBar docs={allDocs} />
          <main className="relative px-4 pt-14 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
