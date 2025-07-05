import { defineQuery } from "next-sanity";

const articleFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  mainImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{name, image},
`;

export const articleQuery = defineQuery(`
    *[_type == "article" && slug.current == $slug] [0] {
      body,
      ${articleFields}
    }
  `);

export const allArticlesQuery = defineQuery(`
    *[_type == "article" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      ${articleFields}
    }
  `);

export const allWorksQuery = defineQuery(`
    *[_type == "work" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      ${articleFields}
    }
  `);

export const workQuery = defineQuery(`
    *[_type == "work" && slug.current == $slug] [0] {
      sections,
      ${articleFields}
    }
  `);
