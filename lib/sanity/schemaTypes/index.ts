import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { articleType } from "./articleType";
import { authorType } from "./authorType";
import { tagType } from "./tagType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, tagType, articleType, authorType],
};
