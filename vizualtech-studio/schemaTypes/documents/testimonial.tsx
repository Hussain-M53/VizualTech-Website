import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      description: 'The testimonial text from the client.',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      description: 'The name of the client giving the testimonial.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'title',
      title: 'Client Title',
      type: 'string',
      description: 'The title or position of the client.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'imageSrc',
      title: 'Client Image',
      type: 'image',
      description: 'The image of the client.',
      options: {
        hotspot: true, // Enables cropping
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'imageSrc',
    },
  },
});
