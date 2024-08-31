export default {
  name: "callToAction",
  title: "Call To Action",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title / Heading of the call to action",
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
      ],
    },
  ],
};
