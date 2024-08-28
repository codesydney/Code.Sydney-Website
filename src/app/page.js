import { fetchHomepageData } from "@/sanity/lib/sanityAPIFuncs";
import Hero from "./components/Home/Hero";
import StatisticsSection from "./components/Home/StatisticsSection";
import ProjectsSection from "./components/Home/ProjectsSection";
import FriendsSection from "./components/Home/FriendsSection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import GallerySection from "./components/Home/GallerySection";
import CallToAction from "./components/shared/CTA/CallToAction";
import LinkButton from "./components/shared/LinkButton";
import PageChange from "./components/shared/PageChange";
export default async function Home() {
  const homePageData = await fetchHomepageData();
  const {
    hero,
    statisticsSection,
    projectsSection,
    friendsSection,
    testimonialsSection,
    gallerySection,
  } = homePageData;

  return (
    <div className="">
      <PageChange />
      <Hero hero={hero} />
      <StatisticsSection statisticsData={statisticsSection} />
      <FriendsSection friendsData={friendsSection} />
      <ProjectsSection projectsData={projectsSection} />
      <TestimonialsSection testimonialsData={testimonialsSection} />
      <GallerySection galleryData={gallerySection} />
      <CallToAction title="Ready to Transform Your Mission into a Digital Success?">
        <p className="text-center mb-8 max-w-[600px] font-light">
          We provide software development, integration and data consultancy
          tailored for non-profits, charities, and organizations of all sizes.
          Our commitment is to amplify your mission and ensure your success.
        </p>
        <LinkButton to="/contact" variant="hollow" target="">
          Get Started Now
        </LinkButton>
      </CallToAction>
    </div>
  );
}
