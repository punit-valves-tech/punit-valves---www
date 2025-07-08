/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "@/lib/sanity/live";
import { allArticleSlugsQuery, allProductSlugsQuery } from "@/lib/sanity/queries";
import type { MetadataRoute } from "next";

const ORIGIN = "http://www.punitvalves.com";

const route = (
  url = "/",
  lastModified?: any,
//   changeFrequency?: any,
//   priority?: any
) => ({
  url: `${ORIGIN}${url}`,
  lastModified: lastModified ?? new Date(),
//   changeFrequency: changeFrequency ?? "yearly",
//   priority: priority ?? 1,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routeArticles = (
    await sanityFetch({ query: allArticleSlugsQuery })
  ).data.map((o: any) => route(`/blog/${o.slug}`));

  const routeProducts = (
    await sanityFetch({ query: allProductSlugsQuery })
  ).data.map((o: any) => route(`/products/${o.slug}`));

  return [
    route("/"),
    route("/about"),
    route("/contact"),
    route("/brochure"),

    route("/products"),
    ...routeProducts,

    route("/blog"),
    ...routeArticles,
  ];
}
