import { FaLinkedin, FaFacebook, FaGlobe, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import LinkButton from "@/app/components/shared/LinkButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const iconMapping = {
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  facebook: FaFacebook,
  website: FaGlobe,
  github: FaGithub,
};

export default function SlidingCard({
  slidingCardData,
  isCardActive,
  index,
  activeIndex,
  isLargeScreen,
  handleMakeCurrentCard,
}) {
  const { title, description, link, image, id } = slidingCardData;
  const [isActive, setIsActive] = useState(isCardActive);

  useEffect(() => {
    setIsActive(isCardActive);
    // if (isCardActive) {
    //   animate(scope.current, { opacity: 1 });
    // }
  }, [isCardActive]);

  const IconComponent = iconMapping[link.icon] || FaGlobe;

  return (
    <motion.div
      layout
      style={{
        width: isLargeScreen ? (isActive ? "850px" : "432px") : "",
        transform: `translateX(-${activeIndex * 472}px)`,
      }}
      transition={{ duration: 0.3 }}
      className="mb-10 p-4 bg-custom-light/5 rounded max-w-[100%] lg:inline-block lg:mr-10 lg:max-w-[850px] transition-all duration-1000"
    >
      <div
        className={`transiton-all duration-1000 md:grid grid-cols-2 gap-4 lg:grid-cols-1 ${
          isActive ? "lg:grid-cols-2" : ""
        }`}
      >
        <div
          onClick={() => handleMakeCurrentCard(index)}
          className="md:max-w-[400px] lg:w-[400px] lg:cursor-pointer"
        >
          <Image
            width={400}
            height={400}
            src={urlFor(image.asset).url()}
            alt={image.alt}
            className="w-[100%] h-auto"
            priority
          />
        </div>
        {isActive && (
          <motion.div
            style={{ display: isActive ? "block" : "none" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: isLargeScreen ? 1 : "100%" }}
            transition={{ duration: 0.3, delay: 1 }}
            className={`mt-4 h-fit`}
          >
            <h2 className="text-2xl mb-2 text-custom-primary font-medium whitespace-normal">
              {title}
            </h2>
            <p className="text-custom-light/80 text-sm whitespace-normal">
              {description}
            </p>
            <div>
              <LinkButton
                to={link.url}
                variant="hollow"
                target={link.openInNewTab ? "_blank" : "_self"}
                extraClasses="mt-4"
              >
                {link.text} <IconComponent className="text-2xl" />
              </LinkButton>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
