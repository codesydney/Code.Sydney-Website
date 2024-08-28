"use client";
import { useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "@/app/hooks/useDimension";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import SectionTitle from "../shared/SectionTitle";
import GalleryImage from "./GalleryImage";
import { IoIosCloseCircle } from "react-icons/io";

const Column = ({ images, y = 0, colNumber, handleToggleModal }) => {
  console.log(y);
  if (y > 0) {
    y = 0;
  }
  return (
    <motion.div
      style={{ y }}
      className={`w-[33%] h-[100%] relative flex flex-col gap-[2vw]`}
    >
      {images.map((image, index) => {
        return (
          <GalleryImage
            key={index}
            image={image}
            handleToggleModal={handleToggleModal}
          />
        );
      })}
    </motion.div>
  );
};

export default function GallerySection({ galleryData }) {
  const [modalImage, setModalImage] = useState(false);
  const container = useRef(null);
  const { height, width } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "-0.2 start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [width < 1024 ? -height * 0.9 : -height * 1.4, 0.1]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [width < 1024 ? -height * 1.2 : -height * 1.3, 0.1]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [width < 1024 ? -height * 0.9 : -height * 1.5, 0.1]
  );
  const { mainTitle, pseudoTitle, galleryImages } = galleryData;

  const handleToggleModal = (image) => {
    setModalImage(image);
  };

  return (
    <>
      <section className="relative z-20 w-full mx-auto max-w-[1920px] px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 overflow-hidden md:my-8 lg:my-16">
        <SectionTitle psuedoTitle={pseudoTitle ? pseudoTitle : ""}>
          <span className="text-custom-primary">
            {mainTitle ? mainTitle : ""}
          </span>
        </SectionTitle>
        <ReactLenis root>
          <div
            ref={container}
            className="h-[80vh] lg:h-[130vh] flex flex-row gap-[2vw] relative overflow-hidden md:my-8"
          >
            <Column
              colNumber={1}
              images={[galleryImages[0], galleryImages[1], galleryImages[9]]}
              y={y}
              handleToggleModal={handleToggleModal}
            />
            <Column
              colNumber={2}
              images={[
                galleryImages[3],
                galleryImages[4],
                galleryImages[5],
                galleryImages[6],
              ]}
              y={y2}
              handleToggleModal={handleToggleModal}
            />
            <Column
              colNumber={3}
              images={[galleryImages[7], galleryImages[8], galleryImages[2]]}
              y={y3}
              height={height}
              handleToggleModal={handleToggleModal}
            />
          </div>
        </ReactLenis>
      </section>
      {modalImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-custom-dark/80 flex items-center justify-center z-50">
          <div className="p-4 w-full max-w-[800px] h-[80%] flex flex-col items-center justify-center relative">
            <button
              className="absolute top-0 right-0 group"
              onClick={() => handleToggleModal(null)}
            >
              <IoIosCloseCircle className="w-8 h-8 text-custom-light group-hover:text-custom-primary duration-200" />
            </button>
            <img
              src={modalImage.asset.url}
              alt={modalImage.alt}
              className="object-contain w-[100%] h-auto"
            />
            <p className="">{modalImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
