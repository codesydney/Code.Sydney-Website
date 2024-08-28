export default {
  name: 'teamPage',
  title: 'Team page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'pageHeader',
      description: 'The content that appears at the top of the page, before the main content.',
    },
    {
      name: 'leaders',
      title: 'Leadership',
      type: 'array',
      of: [{type: 'teamMember'}],
    },
    {
      name: 'mentors',
      title: 'Mentors',
      type: 'array',
      of: [{type: 'teamMember'}],
    },
  ],
}
