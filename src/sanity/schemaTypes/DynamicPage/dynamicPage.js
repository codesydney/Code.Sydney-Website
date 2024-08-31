export default {
  name: "dynamicPage",
  title: "Dynamic Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "metadata",
      title: "Page Metadata",
      type: "pageMeta", // Use the pageMeta type directly
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        { type: "slidingCardsSection" },
        { type: "pageHeader" },
        { type: "teamSection" },
        { type: "callToAction" },
        // ... other component types
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
