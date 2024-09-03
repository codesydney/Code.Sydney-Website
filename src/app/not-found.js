import Image from "next/image";
import LinkButton from "./components/shared/LinkButton";
export default function NotFound() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 min-h-[60vh] flex items-center justify-center flex-col">
      <div className="mb-4 flex gap-2 content-center items-center text-custom-light font-bold text-9xl bg-gradient-to-r from-custom-primary via-custom-primary via-10% to-custom-light bg-clip-text text-transparent md:text-[12rem] md:gap-4 xl:text-[18rem] perspective-1000">
        4
        <div className="relative w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] xl:w-64 xl:h-64 [perspective:1000px] group">
          <div className="w-full h-full [transform-style:preserve-3d] transition-all duration-500 [transform:rotateY(0deg)] group-hover:[transform:rotateY(-30deg)_rotateX(15deg)] animate-rotate3d rounded-full">
            <div className="absolute inset-0 ">
              <Image
                src="/images/logo-codesyd.png"
                alt="3D Image"
                width={256}
                height={256}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="absolute inset-0 [transform:translateZ(-20px)] rounded-lg [backface-visibility:hidden]"></div>
            <div className="absolute top-0 bottom-0 left-full w-5 [transform:rotateY(90deg)_translateX(-50%)] bg-custom-primary [transform-origin:left]"></div>
            <div className="absolute top-0 bottom-0 right-full w-5 [transform:rotateY(-90deg)_translateX(50%)] bg-custom-primary [transform-origin:right]"></div>
            <div className="absolute top-full left-0 right-0 h-5 [transform:rotateX(-90deg)_translateY(-50%)] bg-custom-primary [transform-origin:top]"></div>
            <div className="absolute bottom-full left-0 right-0 h-5 [transform:rotateX(90deg)_translateY(50%)] bg-custom-primary [transform-origin:bottom]"></div>
          </div>
        </div>
        4
      </div>
      <h1 className="text-2xl font-medium mb-4 xl:font-bold xl:text-4xl">
        Ooops! Page not found
      </h1>
      <LinkButton to="/">Go To Home</LinkButton>
    </section>
  );
}
