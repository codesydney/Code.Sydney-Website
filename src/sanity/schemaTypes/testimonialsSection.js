export default {
  name: 'testimonialsSection',
  title: 'Testimonials Section',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'testimonial'}],
    },
  ],
}
