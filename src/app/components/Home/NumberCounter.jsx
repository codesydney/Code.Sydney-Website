"use client";
import { useEffect, useState } from "react";

export default function NumberCounter({ number }) {
  const [numberCount, setNumberCount] = useState(0);

  useEffect(() => {
    const intervalChange = (2 / number) * 1000;

    const countInterval = setInterval(() => {
      if (number > numberCount) {
        setNumberCount((prevNumber) => {
          if (prevNumber < number) {
            return intervalChange > 2 ? prevNumber + 1 : prevNumber + 5;
          } else {
            clearInterval(countInterval);
            return prevNumber;
          }
        });
      }
    }, intervalChange);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return (
    <span className="text-center text-6xl font-semibold pb-4">
      {numberCount}+
    </span>
  );
}
