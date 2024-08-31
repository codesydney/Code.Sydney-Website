export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description:
        'Description / context about the image that is displayed when the image is viewed in fullwidth modal.',
    },
  ],
}
