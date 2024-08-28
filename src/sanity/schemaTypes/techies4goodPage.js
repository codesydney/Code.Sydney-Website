export default {
  name: 'techies4GoodPage',
  title: 'techies4Good page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'pageHeader',
      description: 'The content that appears at the top of the page, before the main content.',
    },
    {
      name: 'techies',
      title: 'Techies',
      type: 'array',
      of: [{type: 'techie'}],
    },
  ],
}
