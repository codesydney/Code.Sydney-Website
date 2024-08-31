export default {
  name: "pageMeta",
  title: "Page Metadata",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Meta Title",
      type: "string",
      description: "Title used for SEO and browser tabs (50-60 characters)",
      validation: (Rule) =>
        Rule.max(60).warning(
          "Longer titles may be truncated in search results"
        ),
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Description for search engines (150-160 characters)",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Longer descriptions may be truncated in search results"
        ),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Keywords for search engines",
    },
    {
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      description: "Title for social media sharing (55-65 characters)",
    },
    {
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      rows: 3,
      description: "Description for social media sharing (2-4 sentences)",
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description:
        "Image for social media sharing (1200x630 pixels recommended)",
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "The preferred version of this page for search engines",
    },
    {
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Tell search engines not to index this page",
    },
    {
      name: "noFollow",
      title: "No Follow",
      type: "boolean",
      description: "Tell search engines not to follow links on this page",
    },
  ],
};
