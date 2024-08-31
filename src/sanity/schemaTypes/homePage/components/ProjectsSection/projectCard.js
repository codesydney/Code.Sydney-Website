export default {
  name: 'projectCard',
  title: 'Project Card',
  type: 'object',
  fields: [
    {
      name: 'organisation',
      title: 'Organisation/company Name',
      type: 'string',
    },
    {
      name: 'projectType',
      title: 'Type of Project',
      type: 'string',
      description: 'Type of project we completed for the organisation (eg: "website development"',
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string',
    },
    {
      name: 'projectSponserLinkUrl',
      title: 'Project sponser link',
      type: 'url',
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    },
  ],
}
