export default {
  name: 'testimonial',
  title: 'Testimonial Cards',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name of person',
      type: 'string',
      description: 'Name of the person who gave this testimonial',
    },
    {
      name: 'organisation',
      title: 'Organisation',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'The job title/title of relevance for the person giving the testimonial',
    },
    {
      name: 'review',
      title: 'Testimonial/review quote',
      type: 'string',
      description: 'The actual testimonial quote.',
    },
  ],
}
