import Image from "next/image";
import { urlFor } from "@/utils/sanity";
import LinkButton from "../shared/LinkButton";

const indexOne =
  "xl:translate-x-[-100%] xl:scale-150 xl:opacity-0 xl:pointer-events-none";
const indexTwo =
  "xl:opacity-1 xl:translate-x-[0%] xl:scale-100 xl:translate-y-[0%] xl:z-30";
const indexThree =
  "xl:translate-x-[50%] xl:translate-y-[10%] xl:scale-80 xl:z-20 xl:opacity-1 xl:pointer-events-none";
const indexFour =
  "xl:translate-x-[90%] xl:translate-y-[20%] xl:scale-40 xl:z-10 xl:opacity-1 xl:pointer-events-none";

const indexFive =
  "xl:translate-x-[120%] xl:translate-y-[30%] xl:scale-30 xl:z-0 xl:opacity-0 xl:pointer-events-none";

// xl:blur-xl (removed from indexOne, indexThree, four and five)
// xl:blur-none (removed from indexTwo)
const styleArray = [indexOne, indexTwo, indexThree, indexFour, indexFive];

export default function ProjectCard({ projectInfo, index }) {
  const {
    organisation,
    projectType,
    projectDescription,
    projectImage,
    projectSponserLinkUrl,
  } = projectInfo;

  console.log(projectImage);

  return (
    <article
      className={`py-8 lg:grid lg:grid-cols-2 lg:gap-4 xl:absolute xl:h-[100%] xl:top-0 xl:left-0 xl:w-[70%] transition-all duration-[0.7s] xl:pb-0 ${
        index < 5 ? styleArray[index] : styleArray[4]
      }`}
    >
      <div
        className={`mb-4 ${
          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
        } xl:order-2`}
      >
        <Image
          height={400}
          width={600}
          src={urlFor(projectImage).url()}
          alt={projectImage.alt}
        />
      </div>
      <div
        className={`mb-8 ${
          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
        } lg:max-w-[90%] self-center xl:order-1
                  ${index === 1 ? "xl:opacity-1" : "xl:opacity-0"}`}
      >
        <span
          className={`block text-custom-primary uppercase font-bold xl:opacity-0 ${
            index === 1 ? "animate-showProjectContentOrganisation" : ""
          }`}
        >
          {organisation ? organisation : ""}
        </span>
        <h3
          className={`text-xl md:text-2xl font-semibold mb-2 xl:opacity-0
                  ${index === 1 ? "animate-showProjectContentTitle" : ""}`}
        >
          {projectType ? projectType : ""}
        </h3>
        <p
          className={`mb-4 xl:opacity-0 font-light ${
            index === 1 ? "animate-showProjectContentDescription" : ""
          }`}
        >
          {projectDescription ? projectDescription : ""}
        </p>
        <LinkButton
          to={projectSponserLinkUrl ? projectSponserLinkUrl : "/"}
          variant="hollow"
          target="_blank"
          extraClasses={
            index === 1 ? "xl:opacity-0 animate-showProjectContentButton" : ""
          }
        >
          Link to Project Sponsor
        </LinkButton>
      </div>
    </article>
  );
}
