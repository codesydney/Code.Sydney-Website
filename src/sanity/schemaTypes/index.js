import navLink from "./shared/navLink.js";
import header from "./shared/headerNavigation.js";
import internalLink from "./shared/internalLink.js";
import homePage from "./homePage/homePage.js";
import homeHero from "./homePage/components/HeroSection/homeHero.js";
import statisticsCard from "./homePage/components/StatisticsSection/statisticsCard.js";
import iconDropdown from "./shared/iconDropdown.js";
import statisticsSection from "./homePage/components/StatisticsSection/statisticsSection.js";
import projectsSection from "./homePage/components/ProjectsSection/projectsSection.js";
import projectCard from "./homePage/components/ProjectsSection/projectCard.js";
import FriendsSection from "./homePage/components/FriendsSection/FriendsSection.js";
import testimonialCard from "./homePage/components/TestimonialsSection/testimonialCard.js";
import testimonialsSection from "./homePage/components/TestimonialsSection/testimonialsSection.js";
import galleryImage from "./homePage/components/GallerySection/galleryImage.js";
import gallerySection from "./homePage/components/GallerySection/gallerySection.js";
import pageHeader from "./shared/pageHeader.js";
import teamMember from "./DynamicPage/components/Team/teamMember.js";
import TeamSection from "./DynamicPage/components/Team/TeamSection.js";
import dynamicPage from "./DynamicPage/dynamicPage.js";
import SlidingCard from "./DynamicPage/components/SlidingCard.js";
import SlidingCards from "./DynamicPage/components/SlidingCards.js";
import pageMeta from "./shared/pageMeta.js";
import CallToActionSection from "./DynamicPage/components/CallToAction/CallToActionSection.js";

export const schema = {
  types: [
    navLink,
    header,
    internalLink,
    homePage,
    homeHero,
    statisticsCard,
    statisticsSection,
    iconDropdown,
    projectsSection,
    projectCard,
    FriendsSection,
    testimonialCard,
    testimonialsSection,
    galleryImage,
    gallerySection,
    pageHeader,
    TeamSection,
    teamMember,
    dynamicPage,
    SlidingCard,
    SlidingCards,
    pageMeta,
    CallToActionSection,
  ],
};
