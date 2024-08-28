import PageChange from "../components/shared/PageChange";
import PageHeader from "../components/shared/PageHeader";
import Leadership from "./Leadership";
import Mentors from "./Mentors";
import { fetchTeamPageData } from "@/sanity/lib/sanityAPIFuncs";
import { PortableText } from "@portabletext/react";

export default async function Team() {
  const teamPageData = await fetchTeamPageData();
  const { pageHeader, leaders, mentors } = teamPageData;
  return (
    <>
      <PageChange />
      <PageHeader pageTitle={pageHeader?.pageTitle ? pageHeader.pageTitle : ""}>
        {pageHeader?.underTitleContent && (
          <PortableText value={pageHeader.underTitleContent} />
        )}
      </PageHeader>
      <Leadership leaders={leaders} />
      <Mentors mentors={mentors} />
    </>
  );
}
