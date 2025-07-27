/* eslint-disable @typescript-eslint/no-explicit-any */
import { ORIGIN } from "@/lib/content/constants";
import { sanityFetch } from "@/lib/sanity/live";
import { allArticleSlugsQuery, allEventsSlugsQuery, allProductSlugsQuery, allProductsWithClassSlugsQuery } from "@/lib/sanity/queries";
import type { MetadataRoute } from "next";

const route = (
  url = "/",
  lastModified?: any,
//   changeFrequency?: any,
//   priority?: any
) => ({
  url: `${ORIGIN}${url}`,
  lastModified: lastModified,
//   changeFrequency: changeFrequency ?? "yearly",
//   priority: priority ?? 1,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routeArticles = (
    await sanityFetch({ query: allArticleSlugsQuery })
  ).data.map((o: any) => route(`/blog/${o.slug}`, o?.lastUpdatedAt));

  const routeProducts = (
    await sanityFetch({ query: allProductSlugsQuery })
  ).data.map((o: any) => route(`/products/${o.slug}`, o?.lastUpdatedAt));

  const routeEvents = (
    await sanityFetch({ query: allEventsSlugsQuery })
  ).data.map((o: any) => route(`/events/${o.slug}`, o?.lastUpdatedAt));

  const routeClassAndProducts = (
    await sanityFetch({ query: allProductsWithClassSlugsQuery })
  ).data.map((o: any) => route(`/${o?.productClass}/${o?.slug}`, o?.lastUpdatedAt));

  return [
    route("/"),
    route("/about"),
    route("/contact"),
    route("/brochure"),

    route("/products"),
    ...routeProducts,

    route("/blog"),
    ...routeArticles,

    route("/events"),
    ...routeEvents,

    // SEO
    route("/dictionary"),
    
    // Programmatic SEO
    ...routeClassAndProducts
    // TODO: Best <Product Class> Valve Manufacturer
  ];
}
