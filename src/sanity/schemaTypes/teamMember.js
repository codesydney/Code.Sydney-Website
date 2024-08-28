export default {
  name: 'teamMember',
  title: 'Team Member Card',
  type: 'object',
  fields: [
    {
      name: 'memberName',
      title: 'Team Member Name',
      type: 'string',
    },
    {
      name: 'memberRole',
      title: 'Role Of The Member',
      type: 'string',
      description: 'Type of team member (mentor, secretary etc)',
    },
    {
      name: 'memberBio',
      title: 'Team Member Bio',
      type: 'text',
    },
    {
      name: 'memberLinkUrl',
      title: 'Member link (github or linkedin)',
      type: 'url',
    },
    {
      name: 'memberImage',
      title: 'Team Member Image',
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
