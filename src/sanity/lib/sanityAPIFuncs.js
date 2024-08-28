import { client } from "./client";

export const fetchHomepageData = async () => {
  const homeDataQuery = `
    *[_type == "homepage"]{
      hero {
        aboveTitle,
        title,
        moto,
        intro,
        internalLink {
          href,
          label
        },
        image {
          asset->{
            url
          },
          alt
        }
      },
      statisticsSection {
        mainTitle,
        pseudoTitle,
        cards[] {
          icons,
          number,
          text
        }
      },
      friendsSection {
        mainTitle,
        pseudoTitle,
        logoCarousel[] {
          asset->{
            url
          },
          alt
        }
      },
      projectsSection {
        mainTitle,
        pseudoTitle,
        belowTitleText,
        projects[] {
          organisation,
          projectType,
          projectDescription,
          projectSponserLinkUrl,
          projectImage
        }
      },
      testimonialsSection {
        mainTitle,
        pseudoTitle,
        testimonials[] {
          name,
          organisation,
          jobTitle,
          review,
        }
      },
      gallerySection {
        mainTitle, 
        pseudoTitle,
        galleryImages[] {
          asset->{
            url
          },
          alt,
          caption,
        }
      }
    }[0]
  `;

  const data = await client.fetch(
    homeDataQuery,
    {},
    {
      next: { tags: ["homepage"] },
    }
  );
  return data;
};

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
