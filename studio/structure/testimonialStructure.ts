import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';
import { UserIcon } from '@sanity/icons';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Testimonials')
    .icon(UserIcon)
    .schemaType('testimonial')
    .child(
      S.documentTypeList('testimonial')
        .title('Testimonials')
        .child((id) =>
          S.document()
            .documentId(id)
            .schemaType('testimonial')
        )
    )
);
