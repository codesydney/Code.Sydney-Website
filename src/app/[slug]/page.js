import SlidingCard from "@/app/components/dynamicSections/sliderCardSection/SliderCards";
import PageHeader from "@/app/components/shared/PageHeader";
import { fetchDynamicPageData } from "@/sanity/lib/sanityAPIFuncs";
import { PortableText } from "next-sanity";
import PageChange from "../components/shared/PageChange";
import TeamSection from "../components/dynamicSections/teamSection/TeamSection";
import CallToActionDynamic from "../components/dynamicSections/callToActionSection/CallToActionDynamic";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const pageData = await fetchDynamicPageData(params.slug);

  const metadata = pageData?.metadata || {};

  return {
    title: metadata.title || "Code.Sydney",
    description:
      metadata.description ||
      "Code.Sydney is a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs.",
    keywords: metadata.keywords || [],
    openGraph: {
      title: metadata.ogTitle || metadata.title || "Code.Sydney",
      description: metadata.ogDescription || metadata.description,
      images: metadata.ogImage
        ? [
            {
              url: metadata.ogImage.url,
              width: 1200,
              height: 630,
              alt: metadata.ogImage.alt || "Page image",
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.ogTitle || metadata.title || "Code.Sydney",
      description: metadata.ogDescription || metadata.description,
      images: metadata.ogImage ? [metadata.ogImage.url] : [],
    },
    robots: {
      index: metadata.noIndex ? false : true,
      follow: metadata.noFollow ? false : true,
    },
  };
}

export default async function DynamicPage({ params }) {
  const pageData = await fetchDynamicPageData(params.slug);

  if (!pageData) {
    notFound();
  }
  return (
    <>
      <PageChange />
      {pageData.content.map((section, index) => {
        switch (section._type) {
          case "slidingCardsSection":
            return <SlidingCard key={index} slidingCardsData={section} />;
          case "pageHeader":
            return (
              <PageHeader key={index} pageTitle={section?.pageTitle || ""}>
                {section?.underTitleContent && (
                  <PortableText value={section.underTitleContent} />
                )}
              </PageHeader>
            );
          case "teamSection":
            return <TeamSection key={index} teamData={section} />;
          case "callToAction":
            return <CallToActionDynamic key={index} data={section} />;
          // Add cases for other section types
          default:
            return null;
        }
      })}
    </>
  );
}
