export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'homeHero',
    },
    {
      name: 'statisticsSection',
      title: 'Statistics Section',
      type: 'statistics',
    },
    {
      name: 'friendsSection',
      title: 'Friends Section',
      type: 'friendsSection',
    },
    {
      name: 'projectsSection',
      title: 'Projects Section',
      type: 'projectsSection',
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'testimonialsSection',
    },
    {
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'gallerySection',
    },
  ],
}
