import Link from "next/link";

const LinkButton = ({ children, variant, to, extraClasses, target = "" }) => {
  if (variant === "hollow") {
    return (
      <Link
        href={to}
        target={target}
        className={`relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-custom-primary/60 to-custom-primary group-hover:from-purple-600 group-hover:to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-fit shadow-lg shadow-custom-primary/50  ${extraClasses}`}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-200 rounded-lg bg-custom-dark/80 group-hover:bg-custom-dark/0 flex items-center justify-center gap-4">
          {children}
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={to}
      target={target}
      className={`px-5 py-3 text-custom-light rounded-lg mt-2 bg-gradient-to-br from-custom-primary/50 via-custom-primary/70 to-custom-primary 
      hover:bg-gradient-to-bl shadow-lg shadow-custom-primary/50 hover:bg-custom-primary transition-all w-fit duration-200 ${extraClasses}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
