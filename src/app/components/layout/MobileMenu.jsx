import { motion } from "framer-motion";
import NavLink from "./NavLink";
import {
  menuSlide,
  containerVariants,
  linkVariants,
  navButtonVariants,
} from "../../../utils/animationObjects.js";
import { useMemo } from "react";

const SvgCurve = () => {
  const path = useMemo(() => {
    const height = typeof window !== "undefined" ? window.innerHeight : 1000;
    return `M0 100 L0 ${height} Q100 ${height / 2} 0 0`;
  }, []);

  return (
    <svg className="absolute top-0 right-[-100px] w-[100px] h-[100%] fill-custom-dark stroke-none">
      <path d={path}></path>
    </svg>
  );
};

export default function MobileDropdown({ navLinks, isActive, pathname }) {
  const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed w-full h-[100svh] top-0 left-0 flex lg:hidden"
    >
      <motion.ul className="h-full bg-custom-dark flex flex-col min-w-[300px] items-stretch gap-4 p-8 pt-[100px] relative">
        {/* <SvgCurve /> */}
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={linkVariants}
            className={`py-2 px-1 hover:bg-custom-primary/5 rounded flex justify-stretch ${
              index === navLinks.length - 1 ? "mt-auto" : ""
            } ${
              isActive(link.href)
                ? "bg-custom-primary/25 text-custom-primary"
                : ""
            }`}
          >
            <NavLink
              href={link.href}
              text={link.text}
              isActive={false}
              isButtonStyle={index !== navLinks.length - 1}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
