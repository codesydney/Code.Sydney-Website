export default {
  name: 'portfoliosPage',
  title: 'Portfolios Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'pageHeader',
      description: 'The content that appears at the top of the page, before the main content.',
    },
    {
      name: 'portfolios',
      title: 'Portfolios',
      type: 'array',
      of: [{type: 'portfolio'}],
    },
  ],
}
