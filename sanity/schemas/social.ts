import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Platform for Social Media',
      type: 'string',
    }),
    defineField({
      name: 'socialUrl',
      title: 'Social Url',
      type: 'url',
    }),
  ],
})
