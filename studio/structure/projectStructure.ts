import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Projects')
    .schemaType('project')
    .child(
      S.documentTypeList('project')
        .title('Projects')
        .child((id) =>
          S.list()
            .title('Project Details')
            .items([
              S.listItem()
                .title('Details')
                .schemaType('project')
                .child(S.document().schemaType('project').documentId(id)),
            ])
        )
    )
);
