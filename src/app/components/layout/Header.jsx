"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import MobileDropdown from "./MobileMenu";
import HamburgerIcon from "./Hamburger";

const NavLinks = [
  {
    text: "BlueHex",
    href: "/bluehex",
  },
  {
    text: "Techies4Good",
    href: "/techies4good",
  },
  {
    text: "Apps4Good",
    href: "/apps4good",
  },
  {
    text: "Portfolios",
    href: "/portfolios",
  },
  {
    text: "Team",
    href: "/team",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export default function Header({}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  // When menu item clicked - close the menu and unset overflow property
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflowY = "unset";
  }, [pathname]);

  const handleToggleMenu = () => {
    if (menuOpen) {
      document.body.style.overflowY = "unset";
    } else {
      document.body.style.scroll = "none";
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="p-4 md:p-6 w-full flex justify-between items-center lg:py-8 lg:px-10 relative z-50 max-w-[1920px] mx-auto">
      <Link href="/" className="flex relative z-20 gap-2 items-center">
        <Image
          className="w-10"
          src="/images/logo-codesyd.webp"
          alt="Code.sydney Logo"
          width={50}
          height={50}
        />
        <span className="text-2xl text-cs-syd-5 font-bold">Code.Sydney</span>
      </Link>
      <nav className="">
        <button
          className={`lg:hidden w-10 h-8 flex relative z-20 items-center transition-all duration-200 ${
            menuOpen && "rotate-[360deg]"
          }`}
          onClick={handleToggleMenu}
        >
          <HamburgerIcon menuOpen={menuOpen} />
        </button>
        {/* Large Nav - hidden on device < 1024px */}
        <ul className="hidden right-[100%] top-[100%] h-[calc(100vh-72px)] bg-custom-light w-full z-1000 lg:static lg:-w-unset lg:bg-inherit lg:h-fit lg:flex flex-col lg:flex-row p-12 lg:p-0 items-center gap-4 lg:gap-6">
          {NavLinks &&
            NavLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    isActive={isActive(link.href)}
                    href={link.href}
                    text={link.text}
                    isButtonStyle={index !== NavLinks.length - 1}
                  />
                </li>
              );
            })}
        </ul>
        {/* Mobile Nav hidden on devices > 1024px */}
        <AnimatePresence>
          {menuOpen && (
            <MobileDropdown
              navLinks={NavLinks}
              isActive={isActive}
              pathname={pathname}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
