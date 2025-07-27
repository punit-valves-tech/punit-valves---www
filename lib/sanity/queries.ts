import { defineQuery } from "next-sanity";

const articleFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  mainImage,
  "date": coalesce(date, _updatedAt),
  publishedAt,
  lastUpdatedAt,
  category->,
  tags[]-> {title},
  "author": author->{_id, name, image},
  "plaintextBody": pt::text(body)
`;

export const articleQuery = defineQuery(`
    *[_type == "article" && slug.current == $slug] [0] {
      body,
      ${articleFields}
    }
  `);

export const allArticlesQuery = defineQuery(`
    *[_type == "article" && defined(slug.current)] | order(lastUpdatedAt desc) {
      ${articleFields}
    }
  `);

export const allProductsQuery = defineQuery(`
    *[_type == "product" && defined(slug.current)] | order(order asc) {
      _id,
      "slug": slug.current,
      class-> { "slug": slug.current, title },
      name,
      "image": image.asset->url,
      desc,
    }
  `);

export const allArticleSlugsQuery = defineQuery(`
    *[_type == "article" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "slug": slug.current,
      lastUpdatedAt
    }
  `);

export const allProductSlugsQuery = defineQuery(`
    *[_type == "product" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "slug": slug.current,
      "lastUpdatedAt": _updatedAt
    }
  `);

export const allEventsSlugsQuery = defineQuery(`
    *[_type == "event" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "slug": slug.current,
      "lastUpdatedAt": _updatedAt
    }
  `);

export const allProductsWithClassSlugsQuery = defineQuery(`
    *[_type == "product" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      "title": name,
      "slug": slug.current,
      "productClass": class->slug.current,
      "lastUpdatedAt": _updatedAt
    }
  `);

export const productQuery = defineQuery(`
    *[_type == "product" && slug.current == $slug] [0] {
      "slug": slug.current,
      _id,
      name,
      class-> { "slug": slug.current, title },
      image,
      images,
      desc,
      specs
    }
  `);

export const classAndProductQuery = defineQuery(`
  *[_type == "product" && slug.current == $slug && class->slug.current == $class] [0] {
    "slug": slug.current,
    _id,
    name,
    class-> { "slug": slug.current, title },
    image,
    images,
    desc,
    specs
  }
`);

export const classProductsQuery = defineQuery(`
  *[_type == "product" && class->slug.current == $class && slug.current != $slug] | order(order asc) {
    "slug": slug.current,
    _id,
    name,
    class-> { "slug": slug.current, title },
    "image": image.asset->url,
    images,
    desc,
    specs
  }
`);

export const eventQuery = defineQuery(`
    *[_type == "event" && slug.current == $slug] [0] {
      "slug": slug.current,
      _id,
      title,
      "desc": description,
      coverImage,
      images,
      dateTime,
      location,
      link,
      body,
    }
  `);

export const notificationQuery = defineQuery(
  `*[_type == "notification" && expiryDate > now()][0]`
);

export const allEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(dateTime desc) {
    title,
    description,
    dateTime,
    location,
    "slug": slug.current,
  }
`);
