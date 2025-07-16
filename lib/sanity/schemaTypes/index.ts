import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { articleType } from "./articleType";
import { authorType } from "./authorType";
import { tagType } from "./tagType";
import { productType } from "./productType";
import { classType } from "./classType";
import { notification } from "./notification";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, tagType, articleType, authorType, productType, classType, notification],
};
