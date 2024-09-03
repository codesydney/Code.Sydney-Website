import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";
import { fetchNavigation } from "@/sanity/lib/sanityAPIFuncs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://code.sydney"),
  title: "Code.Sydney",
  description:
    "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs.",
  openGraph: {
    title: "Code.Sydney",
    description:
      "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs.",
    images: [
      {
        url: "/images/logo-codesyd.png",
        width: 1200,
        height: 630,
        alt: "Code.Sydney Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code.Sydney",
    description:
      "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs.",
    images: [
      {
        url: "/images/logo-codesyd.png",
        width: 1200,
        height: 630,
        alt: "Code.Sydney Logo",
      },
    ],
  },
};

// NEED TO SET UP BACKUP DATA FOR HEADER NAV ITEMS AND FOOTER NAV ITEMS

export default async function RootLayout({ children }) {
  const headerNavItems = await fetchNavigation("Main Navigation");
  const footerNavItems = await fetchNavigation("Footer Navigation");

  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <Header navItems={headerNavItems} />
        <div className="max-w-[1920px] mx-auto relative">
          <div className="w-[600px] skew-y-12 h-[460px] bg-gradient-to-br from-custom-primary/20 via-custom-primary/20 to-custom-primary/5 rounded-full blur-[100px] absolute top-[20px] left-[50px]"></div>
        </div>
        <main>{children}</main>
        <Footer navItems={footerNavItems} />
      </body>
    </html>
  );
}
