/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import Link from "next/link";
import {
  allArticlesQuery,
  allEventsQuery,
  allProductsQuery,
	allProductsWithClassSlugsQuery,
} from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/live";
import { Metadata } from "next";
import { ORIGIN } from "@/lib/content/constants";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Punit Valves — Valves Dictionary: Visual Sitemap",
  description:
    "Streamline your search on Punit Valves' site with our dictionary featuring visual sitemap and links to all products, events, articles, brochures, and resources",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/dictionary`,
  },
  openGraph: {
    title: "Punit Valves - Valves Dictionary: Visual Sitemap",
    description:
      "Streamline your search on Punit Valves' site with our dictionary featuring visual sitemap and links to all products, events, articles, brochures, and resources",
    url: `/dictionary`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-dictionary.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default async function DictionaryPage() {
  const [{ data: products }, { data: articles }, { data: events }, { data: classWithProducts }] =
    await Promise.all([
      sanityFetch({ query: allProductsQuery }),
      sanityFetch({ query: allArticlesQuery }),
      sanityFetch({ query: allEventsQuery }),
      sanityFetch({ query: allProductsWithClassSlugsQuery }),
    ]);

  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="VISUAL SITEMAP"
            titleAs="h1"
            title={
              <>
                Explore our{" "}
                <span className="text-[var(--primary-color)]">Dictionary</span>
              </>
            }
            desc={
              <>
                Effortlessly find what you need in our redesigned dictionary,
                Indexing excellence for easy navigation and all-encompassing
                links to products, events, articles, brochures, and resources
                tailored for Global Industrial Clients.
              </>
            }
          />
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <div className="pb-48">
          <table className="w-full">
            <tbody className="w-full flex flex-col">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {products.map?.((o: any, i: any) => (
                <tr
                  className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]"
                  key={i}
                >
                  <td className="col-span-2">
                    <Text
                      as="p"
                      scale="p3"
                      font="ibm-plex"
                      className="uppercase text-[var(--secondary-color)]"
                    >
                      PRODUCT
                    </Text>
                  </td>
                  <td className="col-span-6">
                    <Text as="p" scale="p3" font="ibm-plex">
                      <Link
                        className="text-blue-600 underline underline-offset-2"
                        href={`/products/${o.slug}`}
                      >
                        {o.name}
                      </Link>
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ARTICLES */}
      <Section>
        <div className="pb-48">
          <table className="w-full">
            <tbody className="w-full flex flex-col">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {articles.map?.((o: any, i: any) => (
                <tr
                  className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]"
                  key={i}
                >
                  <td className="col-span-2">
                    <Text
                      as="p"
                      scale="p3"
                      font="ibm-plex"
                      className="uppercase text-[var(--secondary-color)]"
                    >
                      ARTICLE
                    </Text>
                  </td>
                  <td className="col-span-6">
                    <Text as="p" scale="p3" font="ibm-plex">
                      <Link
                        className="text-blue-600 underline underline-offset-2"
                        href={`/blog/${o.slug}`}
                      >
                        {o.title}
                      </Link>
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* EVENTS */}
      <Section>
        <div className="pb-48">
          <table className="w-full">
            <tbody className="w-full flex flex-col">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {events.map?.((o: any, i: any) => (
                <tr
                  className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]"
                  key={i}
                >
                  <td className="col-span-2">
                    <Text
                      as="p"
                      scale="p3"
                      font="ibm-plex"
                      className="uppercase text-[var(--secondary-color)]"
                    >
                      EVENT
                    </Text>
                  </td>
                  <td className="col-span-6">
                    <Text as="p" scale="p3" font="ibm-plex">
                      <Link
                        className="text-blue-600 underline underline-offset-2"
                        href={`/events/${o.slug}`}
                      >
                        {o.title}
                      </Link>
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CLASS WITH PRODUCT */}
      <Section>
        <div className="pb-0">
          <table className="w-full">
            <tbody className="w-full flex flex-col">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {classWithProducts.map?.((o: any, i: any) => (
                <tr
                  className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]"
                  key={i}
                >
                  <td className="col-span-2">
                    <Text
                      as="p"
                      scale="p3"
                      font="ibm-plex"
                      className="uppercase text-[var(--secondary-color)]"
                    >
                      {o?.productClass}
                    </Text>
                  </td>
                  <td className="col-span-6">
                    <Text as="p" scale="p3" font="ibm-plex">
                      <Link
                        className="text-blue-600 underline underline-offset-2"
                        href={`/${o.productClass}/${o.slug}`}
                      >
                        {o.title}
                      </Link>
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/*  */}
      {/* CTA */}
      <CTA />
    </Page>
  );
}
