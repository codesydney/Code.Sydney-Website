export default {
  name: 'statistics',
  title: 'Statistics Section',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'pseudoTitle',
      title: 'Pseudo Title',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'statisticsCard'}],
    },
  ],
}
