import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';
// import { HandThumbUpIcon } from '@sanity/icons';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Values')
    // .icon(HandThumbUpIcon)
    .schemaType('value')
    .child(
      S.documentTypeList('value')
        .title('Values')
        .child((id) =>
          S.document()
            .documentId(id)
            .schemaType('value')
        )
    )
);
