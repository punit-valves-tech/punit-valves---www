import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import EmblaCarousel from "@/components/organisms/thumbs-carousel";
import { StructuredData } from "@/components/utils";
import { BlockContent } from "@/components/utils/portable-text";
import Section from "@/components/utils/section";
import { ORIGIN } from "@/lib/content/constants";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import { productQuery } from "@/lib/sanity/queries";
import { ArrowDownToLineIcon, ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [{ data: product }] = await Promise.all([
    sanityFetch({ query: productQuery, params }),
  ]);

  return {
    title: product.name,
    description: `Discover Punit Valves’ ${product.name}, engineered for durability and precision in diverse applications.`,
    metadataBase: new URL(ORIGIN),
    alternates: {
      canonical: `/products/${(await params)?.slug}`,
    },
    openGraph: {
      title: product.name,
      description: `Discover Punit Valves’ ${product.name}, engineered for durability and precision in diverse applications.`,
      url: `${ORIGIN}/products/${(await params)?.slug}`,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ArticlePage(props: any) {
  const params = await props.params;
  const [{ data: product }] = await Promise.all([
    sanityFetch({ query: productQuery, params }),
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
          description: product?.desc,
          brand: {
            "@type": "Brand",
            name: "Punit Valves",
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
      <CTA />
    </Page>
  );
}
