import { defineField, defineType } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project (e.g., Collaborative Editing)',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the project.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Optional content such as images, custom text, or HTML.',
      of: [
        { type: 'block' }, // For rich text content
        {
          type: 'image', // For images
          options: { hotspot: true },
        },
        // {
        //   type: 'customComponent', // Example of a custom type if you want to render specific React components
        // },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'CSS-compatible background color for this project section.',
      options: {
        list: [
          { title: 'Cyan to Emerald', value: 'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))' },
          { title: 'Pink to Indigo', value: 'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))' },
          { title: 'Orange to Yellow', value: 'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))' },
        ],
      },
      initialValue: 'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'content.0.asset', // Preview the first image in the content array if available
    },
  },
});
