"use client";
import Link from "next/link";
import Image from "next/image";
import FooterWebsiteLinks from "./FooterWebsiteLinks";
import FooterContactLinks from "./FooterContactLinks";
import FooterCopyright from "./FooterCopyright";
import FooterSocialLinks from "./FooterSocialLinks";
import { usePathname } from "next/navigation";

export default function Footer({ navItems }) {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  return (
    <footer className="relative">
      <div className="px-4 md:px-6 lg:px-10 pt-12 pb-8 lg:pt-24 max-w-[1920px] mx-auto relative before:content before:absolute before:w-full before:h-[2px] before:top-0 before:left-0 before:bg-gradient-to-r before:from-custom-primary/0 before:via-custom-primary/100 before:to-custom-primary/0 z-10">
        <nav className="grid grid-cols-2 gap-x-4  gap-y-4 md:grid-cols-3 lg:grid-cols-5 pb-16 lg:pb-24">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-center lg:items-start mb-8">
            <Link href="/">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-4xl ">
                <Image
                  className="w-10"
                  src="/images/logo-codesyd.webp"
                  alt="Code.sydney Logo"
                  width={50}
                  height={50}
                />
                <span className="">Code.Sydney</span>
              </h3>
            </Link>
            <p className="text-xl font-semibold text-custom-primary">
              Dux Servit
            </p>
            <p className="font-light text-custom-light/90 max-w-[400px] text-center lg:text-left">
              Technology for Good.
            </p>
          </div>
          <FooterWebsiteLinks navItems={navItems} isActive={isActive} />
          <FooterContactLinks isActive={isActive} />
          <FooterSocialLinks isActive={isActive} />
        </nav>
        <FooterCopyright />
        <div className="pt-4 mt-4">
          <p className="text-center text-custom-light/70 font-light text-xs max-w-4xl mx-auto leading-relaxed">
            We acknowledge and pay respects to the First Nations People of Australia, the land in which we live and work. We recognise the strength, resilience and capacity of Aboriginal people and pay respects to elders past, present and emerging.
          </p>
        </div>
      </div>
      <div className="w-[80vw] absolute h-[100px] bg-gradient-to-b from-custom-primary/20 via-custom-primary/50  to-custom-primary rounded-full blur-[100px] bottom-[0%] left-[50%] translate-x-[-50%]"></div>
    </footer>
  );
}
