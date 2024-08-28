"use client";
import SectionTitle from "../shared/SectionTitle";
import { useState, useEffect, useRef } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import TestimonialCard from "./TestimonialCard";
import { AnimatePresence } from "framer-motion";

export default function TestimonialsSection({ testimonialsData }) {
  const { mainTitle, pseudoTitle, testimonials } = testimonialsData;
  const [testSlider, setTestSlider] = useState(testimonials);
  const [windowWidth, setWindowWidth] = useState(null);
  const cardRefFirstCol = useRef(null);
  const cardRefSecondCol = useRef(null);
  const [cardFirstColHeight, setCardFirstColHeight] = useState(0);
  const [cardSecondColHeight, setCardSecondColHeight] = useState(0);
  const [blueTitle, whiteTitle] = [mainTitle.slice(0, 12), mainTitle.slice(12)];
  const [animateProgressKey, setAnimateProgressKey] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (windowWidth >= 768) {
      interval = setInterval(() => {
        setTestSlider((prevSlider) => {
          const newSlider = [
            ...prevSlider.slice(1, prevSlider.length),
            prevSlider[0],
          ];
          return newSlider;
        });

        setAnimateProgressKey(animateProgressKey + 1);
      }, 10000); // Adjust the interval time as needed
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [windowWidth]);

  useEffect(() => {
    if (cardRefFirstCol.current) {
      setCardFirstColHeight(cardRefFirstCol.current.clientHeight);
    }
    if (cardRefSecondCol.current) {
      setCardSecondColHeight(cardRefSecondCol.current.clientHeight);
    }
  }, [testSlider]);

  const next = () => {
    const newSlider = [
      ...testSlider.slice(1, testSlider.length),
      testSlider[0],
    ];
    setTestSlider(newSlider);
  };
  const previous = () => {
    const newSlider = [
      testSlider[testSlider.length - 1],
      ...testSlider.slice(0, testSlider.length - 1),
    ];
    setTestSlider(newSlider);
  };

  return (
    <section className="relative z-20 w-full mx-auto max-w-[1920px] mt-4 p-4 py-8 md:p-6 md:py-10 lg:p-10 lg:py-16">
      <div className="w-[700px] skew-y-12 h-[460px] bg-gradient-to-br from-custom-primary/20 via-custom-primary/50 to-white/50 rounded-full blur-[100px] absolute top-[100px] left-[50%] translate-x-[-30%] z-0 xl:w-[1200px]"></div>
      <div className="relative z-100 xl:grid xl:grid-cols-40-60">
        <div className="relative mb-8">
          <SectionTitle psuedoTitle={pseudoTitle ? pseudoTitle : ""}>
            <span className="text-custom-primary">{blueTitle}</span>
            {whiteTitle}
          </SectionTitle>
        </div>
        <div className="absolute right-0 w-[200px] h-1 rounded-full bg-custom-light/20 hidden md:block">
          <div
            key={animateProgressKey}
            className="h-1 origin-left w-[100%] rounded-full animate-testimonialAutoSlide bg-custom-light"
          ></div>
        </div>
        <div>
          <div className="py-3 flex justify-between max-w-[700px] mx-auto md:hidden">
            <button
              className="text-custom-light flex gap-2 items-center"
              onClick={previous}
            >
              <CiCircleChevLeft />
              Previous
            </button>
            <button
              className="text-custom-light flex gap-2 items-center"
              onClick={next}
            >
              Next <CiCircleChevRight />
            </button>
          </div>
          <div className="flex justify-center items-stretch gap-4 overflow-hidden relative z-100 md:hidden">
            {testSlider &&
              testSlider.map((testimonial, index) => {
                return (
                  <TestimonialCard
                    key={testimonial.name}
                    testimonial={testimonial}
                    index={index}
                  />
                );
              })}
          </div>
          {/* All Of The Below Content Is Only For screens > 1280px */}
          <div className="justify-center items-stretch gap-4 overflow-hidden relative z-100 hidden md:grid md:grid-cols-2 max-h-[750px]">
            {testSlider && (
              <>
                <div>
                  <AnimatePresence>
                    {testSlider.map((testimonial, index) => {
                      return (
                        <TestimonialCard
                          key={testimonial.name + index}
                          testimonial={testimonial}
                          index={index}
                          cardHeight={cardFirstColHeight}
                          cardRef={index === 0 ? cardRefFirstCol : null}
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>

                <div className="mt-10 overflow-y-hidden">
                  <AnimatePresence>
                    {testSlider.map((testimonial, index) => {
                      return (
                        <TestimonialCard
                          key={testimonial.name + index}
                          testimonial={
                            testSlider[(index + 2) % testSlider.length]
                          }
                          index={index}
                          cardHeight={cardSecondColHeight}
                          cardRef={index === 0 ? cardRefSecondCol : null}
                        />
                      );
                    })}
                  </AnimatePresence>
                  ;
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
