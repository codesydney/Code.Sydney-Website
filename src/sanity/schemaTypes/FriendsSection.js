export default {
  name: 'friendsSection',
  title: 'Friends Section',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'pseudoTitle',
      title: 'Pseudo Title',
      type: 'string',
    },
    {
      name: 'logoCarousel',
      title: 'Logo Carousel',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'Organisation logo',
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
    },
  ],
}
