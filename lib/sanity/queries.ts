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

export const allProductsQuery = defineQuery(`
    *[_type == "product" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      _id,
      "slug": slug.current,
      name,
      image,
      desc,
    }
  `);

export const allArticleSlugsQuery = defineQuery(`
    *[_type == "article" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "slug": slug.current
    }
  `);

export const allProductSlugsQuery = defineQuery(`
    *[_type == "product" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "slug": slug.current
    }
  `);

export const productQuery = defineQuery(`
    *[_type == "product" && slug.current == $slug] [0] {
      "slug": slug.current,
      _id,
      name,
      image,
      desc,
      specs
    }
  `);
