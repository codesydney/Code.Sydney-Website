export default {
  name: 'apps4GoodPage',
  title: 'Apps4Good page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'pageHeader',
      description: 'The content that appears at the top of the page, before the main content.',
    },
    {
      name: 'apps',
      title: 'Apps4Good',
      type: 'array',
      of: [{type: 'app'}],
    },
  ],
}
