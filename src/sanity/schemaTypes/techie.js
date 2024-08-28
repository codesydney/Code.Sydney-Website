export default {
  name: 'techie',
  title: 'Techie card',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the techie',
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
