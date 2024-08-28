export default function HamburgerIcon({ menuOpen }) {
  const menuOpenClass =
    "-rotate-45 before:rotate-90 before:translate-x-[50%] before:-translate-y-[0.6rem] after:rotate-90 after:translate-x-[-50%] after:translate-y-[0.6rem]";

  return (
    <div
      className={`w-full h-1 bg-white rounded-full before:content-[' '] before:w-[50%] before:h-1 before:absolute before:top-0 before:left-0 before:bg-white before:rounded-full after:content-[' '] after:w-[50%] after:h-1 after:absolute after:bottom-0 after:right-0 after:bg-white after:rounded-full transition-all duration-200 ${
        menuOpen && menuOpenClass
      }`}
    ></div>
  );
}
