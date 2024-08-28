"use client";
import CarouselSlider from "./CarouselSlider";
import { useState } from "react";

export default function Carousel({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slides);

  const handleSlideRight = () => {
    if (slideIndex === slides.length - 1) {
      
    }
  }

  return (
    <section>
      <CarouselSlider slideIndex={slideIndex} slides={slides} />
      <CarouselButtons
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        sliderLength={slides.length}
      />
    </section>
  );
}

const CarouselButtons = () => {
  return (
    <div>
      <button className="rounded-full bg-neutral-300 h-6 w-6" onClick={() => {
        
      }}>Hello</button>
    </div>
  );
};
