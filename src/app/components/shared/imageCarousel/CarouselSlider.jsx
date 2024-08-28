"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CarouselSlider({ slides, slideIndex }) {
  console.log("carousel Slider", typeof slides);
  return (
    <article className="overflow-hidden w-full ">
      <motion.div
        className="flex cursor-grap active:cursor-grapping items-center rounded-2xl"
        animate={{
          translateX: `-${slideIndex * 105}%`,
        }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {slides &&
          slides.map((slide) => {
            return <CarouselSlide key={slide.name} slide={slide} />;
          })}
      </motion.div>
    </article>
  );
}

const CarouselSlide = ({ slide }) => {
  const { name, description, linkedinUrl, image, id } = slide;
  console.log(image);
  return (
    <motion.div
      key={slide.name}
      className="w-[400px] h-[400px] mr-[5%] shrink-0 overflow-hidden"
    >
      <img
        src={image.asset.url}
        alt=""
        className="w-full h-full object-cover block"
      />
    </motion.div>
  );
};
