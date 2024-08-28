export default {
  name: 'statisticsCard',
  title: 'Statistics Card',
  type: 'object',
  fields: [
    {
      name: 'icons',
      title: 'Icon',
      type: 'array',
      of: [{type: 'iconDropdown'}],
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
}
