import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Content")
    .items([
      S.divider(),
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("tag").title("Tags"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["article", "category", "tag", "author", "work", "product"].includes(
            item.getId()!
          )
      ),
    ]);
};
