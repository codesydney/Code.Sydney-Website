export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "Main Navigation" or "Footer Navigation"',
    },
    {
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "reference",
              to: [{ type: "dynamicPage" }],
            },
          ],
        },
      ],
    },
  ],
};
