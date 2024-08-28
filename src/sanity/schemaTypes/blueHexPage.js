export default {
  name: 'blueHexPage',
  title: 'Blue Hex Page',
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
      name: 'blueHexGroups',
      title: 'Blue Hex Groups',
      type: 'array',
      of: [{type: 'blueHexGroup'}],
    },
  ],
}
