import Link from "next/link";

export default function NavLink({ href, text, isActive, isButtonStyle }) {
  return (
    <>
      {isButtonStyle ? (
        <Link
          href={href}
          className={`font-light group relative inline-block px-2 rounded-full w-full transition-all duration-200
        ${
          isActive &&
          "before:content-[''] before:absolute before:inset-0 before:bg-custom-primary before:blur-[20px] before:rounded-full"
        }`}
        >
          <span className="relative z-10 text-custom-light group-hover:text-custom-primary">
            {text}
          </span>
        </Link>
      ) : (
        <Link
          href={href}
          className="px-4 py-2 bg-gradient-to-b from-[#2892F9] to-[#1D73C6] hover:from-[#4DAEF9] hover:to-[#3C89C9] rounded shadow-md w-full text-center hover:shadow-inset transition-all duration-300 text-white"
        >
          {text}
        </Link>
      )}
    </>
  );
}
