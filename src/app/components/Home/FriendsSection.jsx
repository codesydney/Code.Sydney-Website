import { urlFor } from "@/utils/sanity";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";

export default function FriendsSection({ friendsData }) {
  const { mainTitle, pseudoTitle, logoCarousel } = friendsData;
  const [titleWhite, titleBlue, titleWhiteSecond] = [
    mainTitle.slice(0, 21),
    mainTitle.slice(21, 31),
    mainTitle.slice(31),
  ];

  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 ">
      <SectionTitle psuedoTitle={pseudoTitle ? pseudoTitle : ""}>
        <span>
          {titleWhite}
          <span className="text-custom-primary">{titleBlue} </span>
          {titleWhiteSecond}
        </span>
      </SectionTitle>
      <div
        className="pt-20 overflow-x-hidden whitespace-nowrap relative before:absolute before:content-[' '] before:top-0 before:left-0 before:h-full before:w-10 before:bg-gradient-to-r before:from-custom-dark/100 before:to-custom-dark/0 before:z-10
      after:absolute after:content-[' '] after:top-0 after:right-0 after:h-full after:w-10 after:z-10 after:bg-gradient-to-l after:from-custom-dark/100 after:to-custom-dark/0"
      >
        <div className="whitespace-nowrap w-max animate-carouselSlide inline-block">
          {logoCarousel &&
            logoCarousel.map((logo, index) => {
              return (
                <img
                  key={index}
                  src={urlFor(logo).url()}
                  alt={logo.alt}
                  width={200}
                  height={150}
                  loading="lazy"
                  className="h-[100px] md:h-[150px] w-auto inline-block mr-8 md:mr-20"
                />
              );
            })}
        </div>
        <div className="whitespace-nowrap w-max animate-carouselSlide inline-block">
          {logoCarousel &&
            logoCarousel.map((logo, index) => {
              return (
                <img
                  key={index}
                  src={urlFor(logo).url()}
                  alt={logo.alt}
                  width={200}
                  height={150}
                  className="h-[100px] md:h-[150px] w-auto inline-block mr-8 md:mr-20"
                  loading="lazy"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
