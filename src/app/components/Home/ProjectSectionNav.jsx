import { FaAngleRight } from "react-icons/fa";
const ProjectSectionNav = ({
  projectsLength,
  currentProject,
  handleNextClick,
}) => {
  const emptyArray = new Array(projectsLength).fill(true);
  console.log(emptyArray);
  return (
    <div className="w-[200px] none xl:block">
      <div className="flex gap-1 mb-5">
        {emptyArray &&
          emptyArray.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-custom-light/20 min-h-2 flex-grow rounded-full transition-all duration-500 scale-x-100
                  ${
                    index + 1 === currentProject
                      ? "scale-x-125 bg-custom-light/80"
                      : ""
                  }`}
              ></div>
            );
          })}
      </div>
      <div className="flex justify-between">
        <button
          className="flex gap-2 items-center text-custom-light hover:text-custom-primary transition-all duration-200"
          onClick={handleNextClick}
        >
          Next <FaAngleRight />
        </button>
        <span>
          0{currentProject} / 0{projectsLength}
        </span>
      </div>
    </div>
  );
};

export default ProjectSectionNav;
