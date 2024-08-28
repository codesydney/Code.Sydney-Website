export default {
  name: 'pageHeader',
  title: 'Page Header',
  type: 'object',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      description: 'This is the main title for the page (rendered as a h1 element)',
    },
    {
      name: 'underTitleContent',
      type: 'Under title content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
