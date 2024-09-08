import { StrikethroughIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: StrikethroughIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'The name of the service (e.g., BMS Control Submittals)',
    }),
    defineField({
      name: 'subName',
      title: 'Service Subname',
      type: 'string',
      description: 'A brief subheading or tagline for the service (e.g., Cost Effective: Engineering Designs)',
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'text',
      description: 'A detailed description of the service offered.',
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'An image representing the service.',
      options: {
        hotspot: true, // Allows cropping of the image to focus on the main subject
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subName',
      media: 'image',
    },
  },
});
