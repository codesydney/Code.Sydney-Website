import { client } from "./client";

export const fetchHomepageData = async () => {
  const homeDataQuery = `*[_type == "homepage"][0]`;

  const data = await client.fetch(
    homeDataQuery,
    {},
    {
      next: { tags: ["homepage"] },
    }
  );
  return data;
};

export const fetchDynamicPageData = async (slug) => {
  const query = `*[_type == "dynamicPage" && slug.current == $slug][0]`;
  return client.fetch(
    query,
    { slug },
    {
      next: { tags: [slug] },
    }
  );
};

export const fetchContactPage = async () => {
  const query = `*[_type == "contactPage"][0]`;
  return client.fetch(
    query,
    {},
    {
      next: { tags: ["contactPage"], revalidate: 3600 },
    }
  );
};

export async function fetchNavigation(type = "main") {
  const query = `*[_type == "navigation" && title == $type][0]{
    "items": items[]{
      label,
      "slug": link->slug.current
    }
  }`;

  return await client
    .fetch(query, { type })
    .then((result) => result?.items || [])
    .catch((error) => {
      console.error("Failed to fetch navigation:", error);
      return [];
    });
}

export const fetchBlueHexPageData = async () => {
  const blueHexQuery = `
    *[_type == "blueHexPage"]{
      pageHeader {
        pageTitle,
        underTitleContent,
      },
      apps[] {
        name,
        description,
        linkedinUrl,
        image {
          asset->{
          url
          },
          alt,
        },
      },
    }[0]
  `;

  const data = await client.fetch(blueHexQuery);
  return data;
};

export const fetchTechiePageData = async () => {
  const techiesDataQuery = `
    *[_type == "techies4GoodPage"]{
      pageHeader {
        pageTitle,
        underTitleContent,
      },
      techies[] {
        name,
        description,
        linkedinUrl,
        image {
          asset->{
          url
          },
          alt,
        },
      },
    }[0]
  `;

  const data = await client.fetch(techiesDataQuery);
  return data;
};

export const fetchApps4GoodPageData = async () => {
  const apps4GoodQuery = `
    *[_type == "apps4GoodPage"]{
      pageHeader {
        pageTitle,
        underTitleContent,
      },
      apps[] {
        name,
        description,
        linkedinUrl,
        image {
          asset->{
          url
          },
          alt,
        },
      },
    }[0]
  `;

  const data = await client.fetch(apps4GoodQuery);
  return data;
};

export const fetchPortfoliosPageData = async () => {
  const portfoliosQuery = `
    *[_type == "portfoliosPage"]{
      pageHeader {
        pageTitle,
        underTitleContent,
      },
      portfolios[] {
        name,
        description,
        linkedinUrl,
        image {
          asset->{
          url
          },
          alt,
        },
      },
    }[0]
  `;

  const data = await client.fetch(portfoliosQuery);
  return data;
};

export const fetchTeamPageData = async () => {
  const teamPageQuery = `
    *[_type == 'teamPage']{
      pageHeader {
        pageTitle,
        underTitleContent,
      },
      leaders[] {
        memberName,
        memberRole,
        memberBio,
        memberLinkUrl,
        memberImage {
            asset->{
            url
            },
            alt,
          },
      },
      mentors[] {
        memberName,
        memberRole,
        memberBio,
        memberLinkUrl,
        memberImage {
            asset->{
            url
            },
            alt,
          },
      },
    }[0]
  `;

  const data = await client.fetch(teamPageQuery);
  return data;
};
