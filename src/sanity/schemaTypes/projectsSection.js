export default {
  name: 'projectsSection',
  title: 'Projects Section',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'pseudoTitle',
      title: 'Pseudo Title',
      type: 'string',
    },
    {
      name: 'belowTitleText',
      title: 'Below Title Text',
      type: 'string',
      description:
        'The text that appears just below the section title. Usually an introduction to the content of that section',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'projectCard'}],
    },
  ],
}
