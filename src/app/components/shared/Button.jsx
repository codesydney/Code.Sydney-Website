const Button = ({ children, variant, handleClick, extraClasses }) => {
  if (variant === "hollow") {
    return (
      <button
        class={`relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-custom-primary/60 to-custom-primary group-hover:from-purple-600 group-hover:to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-fit ${extraClasses}`}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-200 rounded-lg bg-custom-dark/80 group-hover:bg-custom-dark/0">
          {children}
        </span>
      </button>
    );
  }

  if (variant === "underline") {
    return (
      <button
        type="button"
        className={`flex items-center gap-2 py-1 text-custom-primary hover:text-custom-primary
       transition-all duration-200 w-fit ${extraClasses}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`px-5 py-3 text-custom-light rounded-lg mt-2 bg-gradient-to-br from-custom-primary/50 via-custom-primary/70 to-custom-primary 
      hover:bg-gradient-to-bl hover:bg-custom-primary transition-all duration-200 w-fit ${extraClasses}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
