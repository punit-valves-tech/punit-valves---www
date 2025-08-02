/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import EmblaCarousel from "@/components/organisms/thumbs-carousel";
import { StructuredData } from "@/components/utils";
import { BlockContent } from "@/components/utils/portable-text";
import Section from "@/components/utils/section";
import { ORIGIN } from "@/lib/content/constants";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import {
  classAndProductQuery,
  classProductsQuery,
  productQuery,
} from "@/lib/sanity/queries";
import { ArrowDownToLineIcon, ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string; class: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug, class: productClass } = await props.params;

  const [{ data: product }] = await Promise.all([
    sanityFetch({ query: productQuery, params: { slug, class: productClass } }),
  ]);

  const title = `${product.name} — Punit Valves`;
  const description = `${product.class.title} — ${product.name} — Discover Punit Valves, engineered for precision, control and reliability.`;
  const pathname =  `/${productClass}/${slug}`;

  return {
    title,
    description,
    metadataBase: new URL(ORIGIN),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description: `${product.name}`,
      url: `${ORIGIN}${pathname}`,
      siteName: "Punit Industrial Valves",
      images: [
        {
          url: urlFor(product.image).url(), // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProductPage(props: any) {
  const params = await props.params;
  const { class: productClass } = params;

  const [{ data: product }, { data: products }] = await Promise.all([
    sanityFetch({ query: classAndProductQuery, params }),
    sanityFetch({ query: classProductsQuery, params }),
  ]);

  if (!product?._id) {
    return notFound();
  }

  return (
    <Page>
      <StructuredData
        jsonLd={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product.name,
          image: `https://www.punitvalves.com/_next/image?url=${encodeURI(urlFor(product.image).url())}&w=3840&q=75`,
          description: product?.plaintextBody,
          brand: {
            "@type": "Brand",
            name: "Punit Valves",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.4,
            reviewCount: 55,
          },
          sku: `#REF${product._id.substr(1, 4)}`,
        }}
      />
      {/* HERO */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-2 bg-white">
            {product?.images?.length > 0 ? (
              <EmblaCarousel slides={product?.images} />
            ) : (
              <Image
                alt="product valve"
                src={urlFor(product?.image).url()}
                width="640"
                height="640"
                className="border border-[var(--grid-color)] object-cover aspect-square w-full"
              />
            )}
          </div>
          <div className="px-4 flex flex-col h-full">
            <div className="flex-grow min-h-20"></div>
            <Text
              as="p"
              scale="p3"
              font="ibm-plex"
              className="text-[var(--secondary-color)] uppercase"
            >
              {product?.class?.title}
            </Text>
            <Text
              as="h1"
              scale="h5"
              font="expanded"
              className="-ml-0.5 mt-2 uppercase"
            >
              {product?.name}
            </Text>
            <div className="flex-grow" />
            <div className="my-6 flex flex-col md:flex-row gap-4">
              <Button type="primary" href="/brochure">
                DOWNLOAD BROCHURE{" "}
                <ArrowDownToLineIcon className="ml-2 h-4 -mr-2 item-end" />
              </Button>
              <Button type="secondary" href="/contact">
                INQUIRE NOW{" "}
                <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
              </Button>
            </div>
            {/* <div className="flex-grow min-h-20"></div> */}
          </div>
        </div>
      </Section>

      {/* DESC */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-t-[var(--grid-color)]">
          <div className="px-4 py-8">
            <Text as="h2" font="expanded" scale="h7">
              PRODUCT DESCRIPTION
            </Text>
          </div>
          <div className="px-4 py-8">
            <div
              className={`
                          [&>h2]:my-12 [&>h2]:text-3xl [&>h2]:text-black] [&>h2]:font-inter [&>h2]:font-semibold [&>h2]:tracking-[-0.04em]
                          [&>h3]:my-8 [&>h3]:text-xl [&>h3]:text-black] [&>h3]:font-inter [&>h3]:font-semibold [&>h3]:tracking-[-0.02em]
                          [&>p]:my-0 [&>p]:text-base [&>p]:text-[var(--secondary-color)]] [&>p]:font-inter [&>p]:font-medium [&>p]:tracking-[-0.02em] [&>p]:leading-7
                          [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:pb-2 [&>ul>li]:text-base [&>ul>li]:text-black]/90 [&>ul>li]:font-inter [&>ul>li]:font-medium [&>ul>li]:tracking-[-0.02em] [&>ul>li]:leading-7
                          `}
            >
              <BlockContent value={product?.desc} />
            </div>
          </div>
        </div>
      </Section>

      {/* SPECS */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-t-[var(--grid-color)]">
          <div className="px-4 py-8">
            <Text as="h2" font="expanded" scale="h7">
              TECHNICAL SPECIFICATIONS
            </Text>
          </div>
          <div className="py-8">
            <table className="w-full">
              <tbody className="w-full flex flex-col">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {product?.specs?.map((o: any, i: any) => (
                  <tr
                    className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]"
                    key={i}
                  >
                    <td className="col-span-3">
                      <Text
                        as="p"
                        scale="p3"
                        font="ibm-plex"
                        className="uppercase text-[var(--secondary-color)]"
                      >
                        {o.label}
                      </Text>
                    </td>
                    <td className="col-span-5">
                      <Text as="p" scale="p3" font="ibm-plex">
                        {o.value}
                      </Text>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* RELTATED VALVES */}
      {products?.length > 0 ? (
        <>
          <Section>
            <div className="py-20 border-t border-t-[var(--grid-color)]">
              <Headline
                label={product?.class?.title?.toUpperCase()}
                titleAs="h2"
                title={<>RELATED VALVES</>}
                desc={
                  <>
                    Discover other valves in the category of{" "}
                    {product?.class?.title}s. Find reliable solutions for your
                    industrial needs.
                  </>
                }
              />
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-4 -mt-[1px]">
              <div className="border-x border-x-[var(--grid-color)] col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
                {products.map((o: any, i: any) => (
                  <Link
                    href={`/${productClass}/${o.slug}`}
                    key={i}
                    className="bg-[var(--hover-color)] hover:border hover:border-black hover:bg-white hover:drop-shadow-2xl border-x border-x-transparent p-4 border-y border-y-[var(--grid-color)]  flex flex-col"
                  >
                    <div className="w-full aspect-square border border-[var(--grid-color)] bg-white overflow-hidden">
                      <Image
                        alt="product valve"
                        src={urlFor(o.image).url()}
                        width="640"
                        height="640"
                        className="object-cover aspect-square w-full"
                      />
                    </div>
                    <div className="pt-4 flex flex-col flex-grow w-full">
                      <div className="pb-2 flex flex-row text-[var(--secondary-color)]">
                        <Text
                          as="p"
                          scale="p3"
                          font="ibm-plex"
                          className="uppercase"
                        >
                          {o?.class?.title}
                        </Text>
                        <div className="flex-grow" />
                        <Text
                          as="p"
                          scale="p3"
                          font="ibm-plex"
                          className="uppercase"
                        >
                          #REF{o._id.substr(1, 4)}
                        </Text>
                      </div>
                      <div className="flex-grow" />
                      <Text
                        as="h3"
                        scale="p1"
                        font="inter"
                        className="py-4 font-semibold"
                      >
                        {o.name}
                      </Text>
                      <div className="flex flex-col gap-4">
                        <Button className="md:flex-grow" type="secondary">
                          LEARN MORE{" "}
                          <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        </>
      ) : (
        <></>
      )}
      <CTA />
    </Page>
  );
}
