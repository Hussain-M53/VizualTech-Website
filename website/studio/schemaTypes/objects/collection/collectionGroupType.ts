import {PackageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const collectionGroupType = defineField({
  name: 'collectionGroup',
  title: 'Collection group',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collectionLinks',
      type: 'collectionLinks',
    }),
   
  ],
})
