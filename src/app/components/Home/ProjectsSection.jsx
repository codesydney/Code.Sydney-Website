import SectionTitle from "../shared/SectionTitle";
import Projects from "./Projects";

export default function ProjectsSection({ projectsData }) {
  const { mainTitle, pseudoTitle, belowTitleText, projects } = projectsData;
  return (
    <section className="relative z-20 w-full mx-auto max-w-[1920px] px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16">
      <SectionTitle psuedoTitle={pseudoTitle}>
        <span className="text-custom-primary">
          {mainTitle ? mainTitle : "Hello"}
        </span>
      </SectionTitle>
      {belowTitleText && (
        <p className="mt-8 text-center mx-auto max-w-[1000px] font-light">
          {belowTitleText}
        </p>
      )}

      <Projects projectsData={projects} />
    </section>
  );
}
