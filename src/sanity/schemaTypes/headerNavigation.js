export default {
  name: 'headerNavigation',
  title: 'Header Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navLinks',
      title: 'Header Navigation Links',
      description:
        'The last link in this list will always appear as a button (like contact currently does)',
      type: 'array',
      of: [{type: 'navLink'}],
    },
  ],
}
