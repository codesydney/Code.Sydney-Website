"use client";
import { useEffect, useState } from "react";

import SlidingCardsNav from "./SliderCardNav";
import SlidingCard from "./SliderCard";

export default function SlidingCards({ slidingCardsData }) {
  const { title, belowTitleDescription, slidingCards } = slidingCardsData;
  const [windowWidth, setWindowWidth] = useState(null);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowWidth);
  const handlePrevClick = () => {
    if (currentActiveIndex === 0) {
      setCurrentActiveIndex(slidingCards.length - 1);
    } else {
      setCurrentActiveIndex(currentActiveIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentActiveIndex === slidingCards.length - 1) {
      setCurrentActiveIndex(0);
    } else {
      setCurrentActiveIndex(currentActiveIndex + 1);
    }
  };

  const handleMakeCurrentCard = (index) => {
    setCurrentActiveIndex(index);
  };

  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 md:px-6  lg:px-10 overflow-x-hidden">
      <div className="lg:whitespace-nowrap overflow-hidden">
        {slidingCards &&
          slidingCards.map((slidingCard, index) => {
            return (
              <SlidingCard
                activeIndex={currentActiveIndex}
                isCardActive={
                  windowWidth >= 1024 ? currentActiveIndex === index : true
                }
                isLargeScreen={windowWidth >= 1024}
                slidingCardData={slidingCard}
                isLastCard={currentActiveIndex === slidingCards.length - 1}
                key={index}
                index={index}
                handleMakeCurrentCard={handleMakeCurrentCard}
              />
            );
          })}
      </div>
      <div className="hidden lg:block">
        {slidingCards && (
          <SlidingCardsNav
            slidingCardsLength={slidingCards.length}
            currentCard={currentActiveIndex}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        )}
      </div>
    </section>
  );
}
