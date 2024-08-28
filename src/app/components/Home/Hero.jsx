import Link from "next/link";
import Image from "next/image";
import Button from "../shared/Button";
import LinkButton from "../shared/LinkButton";

export default function Hero({ hero }) {
  const { aboveTitle, title, moto, intro, image, internalLink } = hero;

  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 grid gap-16 lg:grid-cols-2 ">
      <div className="lg:flex lg:flex-col lg:justify-center">
        {aboveTitle && <span className="lg:text-xl font-semibold">We are</span>}

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 md:text-6xl xl:text-8xl flex gap-2 items-center bg-gradient-to-r from-custom-primary via-custom-primary via-10% to-custom-light bg-clip-text text-transparent">
          {/* <Image
            className="w-10"
            src="/images/logo-codesyd.webp"
            alt="Code.sydney Logo"
            width={50}
            height={50}
            priority
          /> */}
          {title ? title : "Code.Sydney"}
        </h1>
        {moto && (
          <p className="font-medium text-xl md:text-2xl lg:text-3xl">{moto}</p>
        )}

        <p className="mb-6 font-light">{intro ? intro : ""}</p>
        {internalLink && (
          <LinkButton to={internalLink.href ? internalLink.href : "/"}>
            {internalLink.label ? internalLink.label : "Learn more"}
          </LinkButton>
        )}
      </div>
      <div className="relative">
        {image && (
          <Image
            className="w-full h-auto"
            // src={image.asset.url}
            src="/images/home_hero.webp"
            alt={image?.alt ? image.alt : ""}
            width={612}
            height={386}
            priority
          />
        )}
      </div>
    </section>
  );
}
