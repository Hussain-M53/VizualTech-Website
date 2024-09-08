import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Services')
    .schemaType('service')
    .child(
      S.documentTypeList('service')
        .title('Services')
        .child((id) =>
          S.list()
            .title('Service Details')
            .items([
              S.listItem()
                .title('Details')
                .schemaType('service')
                .child(S.document().schemaType('service').documentId(id)),
            ])
        )
    )
);
