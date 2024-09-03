import { FaAngleRight } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";

const SlidingCardsNav = ({
  slidingCardsLength,
  currentCard,
  handleNextClick,
  handlePrevClick,
}) => {
  const emptyArray = new Array(slidingCardsLength).fill(true);

  return (
    <div className="w-[200px] none xl:block">
      <div className="flex gap-1 mb-5">
        {emptyArray &&
          emptyArray.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-custom-light/20 min-h-1 flex-grow rounded-full transition-width duration-500
                  ${index === currentCard ? "w-4 bg-custom-light/80" : ""}`}
              ></div>
            );
          })}
      </div>
      <div className="flex justify-between items-center">
        <button
          className="flex gap-2 items-center text-custom-light hover:text-custom-primary transition-all duration-200"
          onClick={handlePrevClick}
        >
          <LuMoveLeft className="text-3xl" />
        </button>
        <button
          className="flex gap-2 items-center text-custom-light hover:text-custom-primary transition-all duration-200"
          onClick={handleNextClick}
        >
          <LuMoveRight className="text-3xl" />
        </button>
        <span>
          0{currentCard + 1} / 0{slidingCardsLength}
        </span>
      </div>
    </div>
  );
};

export default SlidingCardsNav;
