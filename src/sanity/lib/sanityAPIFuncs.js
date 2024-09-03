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
    .fetch(query, { type }, { next: { tags: ["navigation"] } })
    .then((result) => result?.items || [])
    .catch((error) => {
      console.error("Failed to fetch navigation:", error);
      return [];
    });
}
