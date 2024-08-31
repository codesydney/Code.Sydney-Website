export default {
  name: 'homeHero',
  title: 'Home Hero Section',
  type: 'object',
  fields: [
    {
      name: 'aboveTitle',
      title: 'Above Title Text',
      type: 'string',
      description:
        'This is the smaller text that appears above the logo and the title in the hero section',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'moto',
      title: 'Moto Text',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'internalLink', // Use the custom internal link object type
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
}
