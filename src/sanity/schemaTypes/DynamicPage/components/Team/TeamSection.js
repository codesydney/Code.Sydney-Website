export default {
  name: "teamSection",
  title: "Team Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      description:
        "The title for this section. Will be rendered as a h2. Eg 'Leadership'",
      type: "string",
    },
    {
      name: "belowTitleDescription",
      title: "Below title description",
      type: "text",
      description:
        "A small peice of text rendered directly below the section title",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "teamMember" }],
    },
  ],
};
