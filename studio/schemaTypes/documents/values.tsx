import { defineField, defineType } from 'sanity';
//import { RocketLaunchIcon, CurrencyDollarIcon, ChartPieIcon, UserGroupIcon, HandThumbUpIcon, PresentationChartLineIcon } from '@sanity/icons';

export const valueType = defineType({
  name: 'value',
  title: 'Value',
  type: 'document',
//icon: HandThumbUpIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the value or feature (e.g., Improve Customer Retention)',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the value or feature.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'The name of the Heroicon to be used for this value (e.g., RocketLaunchIcon).',
      options: {
        list: [
          { title: 'Rocket Launch', value: 'RocketLaunchIcon' },
          { title: 'Currency Dollar', value: 'CurrencyDollarIcon' },
          { title: 'Chart Pie', value: 'ChartPieIcon' },
          { title: 'User Group', value: 'UserGroupIcon' },
          { title: 'Hand Thumb Up', value: 'HandThumbUpIcon' },
          { title: 'Presentation Chart Line', value: 'PresentationChartLineIcon' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, icon } = selection;
    //   const icons = {
    //     RocketLaunchIcon,
    //     CurrencyDollarIcon,
    //     ChartPieIcon,
    //     UserGroupIcon,
    //     HandThumbUpIcon,
    //     PresentationChartLineIcon,
    //   };
     // const SelectedIcon = icons[icon] || HandThumbUpIcon;

      return {
        title,
        subtitle,
       // media: SelectedIcon,
      };
    },
  },
});
