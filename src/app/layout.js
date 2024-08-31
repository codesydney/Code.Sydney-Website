import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";
import { fetchNavigation } from "@/sanity/lib/sanityAPIFuncs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Code.Sydney",
  description:
    "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs.",
};

export default async function RootLayout({ children }) {
  const headerNavItems = await fetchNavigation("Main Navigation");
  const footerNavItems = await fetchNavigation("Footer Navigation");
  console.log(headerNavItems, "The header nav items");
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
