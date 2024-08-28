export default {
  name: 'portfolio',
  title: 'Portfolio Card',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the portfolio',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short bio.',
    },
    {
      name: 'linkedinUrl',
      title: 'Linkedin url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    },
  ],
}
