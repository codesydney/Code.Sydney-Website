"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PageChange = () => {
  const containerRef = useRef(null);
  const [animateDivs, setAnimateDivs] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    let timeouts = [];

    animateDivs.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimateDivs((prev) => {
            const newAnimateDivs = [...prev];
            newAnimateDivs[index] = true;
            return newAnimateDivs;
          });
          if (index === animateDivs.length - 1 && containerRef.current) {
            setTimeout(() => {
              containerRef.current.style.display = "none";
            }, 1000);
          }
        }, 500 + index * 100)
      );
    });
    return () =>
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
  }, []);
  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center"
    >
      {animateDivs.map((shouldAnimate, index) => (
        <div
          key={index}
          className={`h-full flex-grow bg-custom-dark border-r-[1px] border-solid border-custom-light/10 transform origin-top transition-transform duration-500 flex items-center justify-center ${
            shouldAnimate ? "scale-y-0" : "scale-y-100"
          }`}
        >
          {index === 2 && (
            <div className="text-custom-light text-4xl flex flex-col items-center gap-4">
              <Image
                src="/images/logo-codesyd.png"
                alt="Code.Sydney Logo"
                width={100}
                height={100}
              />
              <div className="text-4xl font-bold bg-gradient-to-r from-cs-syd-5 via-cs-syd-5 via-20% to-custom-light bg-clip-text text-transparent">
                Code.Sydney
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PageChange;
