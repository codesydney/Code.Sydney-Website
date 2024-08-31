export default {
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
      },
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'string',
      description: 'Relative path for internal links (e.g "/contact"',
      hidden: ({parent}) => parent?.type !== 'internal',
    },
    {
      name: 'href',
      title: 'External Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      hidden: ({parent}) => parent?.type !== 'external',
    },
  ],
}
