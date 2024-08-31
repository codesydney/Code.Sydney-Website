export default {
  name: "gallerySection",
  title: "Gallery Section",
  type: "object",
  fields: [
    {
      name: "mainTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "pseudoTitle",
      title: "Pseudo Title",
      type: "string",
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "galleryImage",
        },
      ],
    },
  ],
};
