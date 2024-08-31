export default {
  name: "slidingCardsSection",
  title: "Sliding Cards Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      description: "The title for this section. Will be rendered as a h2",
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
      name: "slidingCards",
      title: "Sliding Cards",
      type: "array",
      of: [{ type: "slidingCard" }],
    },
  ],
};
