export default {
  name: "slidingCard",
  title: "Sliding Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the card.",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description",
    },
    {
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        {
          name: "url",
          title: "Link URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["https"],
            }),
        },
        {
          name: "text",
          title: "Link Text",
          type: "string",
        },
        {
          name: "icon",
          title: "Link Icon",
          type: "string",
          options: {
            list: [
              // Add your predefined icon values here
              { title: "LinkedIn", value: "linkedin" },
              { title: "Twitter", value: "twitter" },
              { title: "Facebook", value: "facebook" },
              { title: "Website", value: "website" },
              { title: "Github", value: "github" },
              // Add more options as needed
            ],
          },
        },
        {
          name: "openInNewTab",
          title: "Open in New Tab",
          type: "boolean",
        },
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
        },
      ],
    },
  ],
};
