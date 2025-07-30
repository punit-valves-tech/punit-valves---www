/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { CTA } from "@/components/organisms/cta";
import { Events } from "@/components/organisms/event-showcase";
import { Page } from "@/components/organisms/page";
import EmblaCarousel from "@/components/organisms/thumbs-carousel";
import { BlockContent } from "@/components/utils/portable-text";
import Section from "@/components/utils/section";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import { eventQuery } from "@/lib/sanity/queries";
import { CalendarDaysIcon, MapPinIcon, TicketIcon } from "lucide-react";
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import { ORIGIN } from "@/lib/content/constants";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: event } = await sanityFetch({ query: eventQuery, params });

  const title = event?.title;
  const description = event?.desc;
  const pathname = `/events/${(await params)?.slug}`;

  return {
    title,
    description,
    metadataBase: new URL(ORIGIN),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: `${ORIGIN}${pathname}`,
      siteName: "Punit Industrial Valves",
      images: [
        {
          url: urlFor(event?.coverImage)?.url(), // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

export default async function ArticlePage(props: any) {
  const params = await props.params;
  const { data: product } = await sanityFetch({ query: eventQuery, params });

  const event = { ...product };

  //   if (!product?._id) {
  //     return notFound();
  //   }

  return (
    <Page>
      {/* <StructuredData
        jsonLd={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product?.name,
          image: `https://www.punitvalves.com/_next/image?url=${encodeURI(urlFor(product?.image)?.url?.())}&w=3840&q=75`,
          description: product?.desc,
          brand: {
            "@type": "Brand",
            name: "Punit Valves",
          },
          sku: `#REF${product?._id?.substr?.(1, 4)}`,
        }}
      /> */}

      {/* HERO */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-4 flex flex-col h-full">
            <div className="flex-grow min-h-20"></div>
            <div className="flex flex-col gap-2 -mb-12">
              <Text
                as="p"
                scale="p3"
                font="ibm-plex"
                className="text-[var(--secondary-color)] uppercase"
              >
                # EVENT
              </Text>
              <Text
                as="h1"
                scale="h5"
                font="expanded"
                className="-ml-0.5 uppercase"
              >
                {product?.title}
              </Text>
              <Text
                as="p"
                scale="p1"
                font="inter"
                className="font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
              >
                {product.desc}
              </Text>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row items-center gap-4">
                  <CalendarDaysIcon className="h-6 w-6 text-[var(--primary-color)]" />
                  <Text as="p" scale="p2" font="ibm-plex">
                    {formatDateTime(event?.dateTime)}
                  </Text>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <MapPinIcon className="h-6 w-6 text-[var(--primary-color)]" />
                  <Text as="p" scale="p2" font="ibm-plex">
                    {event?.location}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex-grow" />
            <div className="my-6 flex flex-col md:flex-row gap-4">
              <Button type="primary" href="#luma-iframe">
                REGISTER NOW <TicketIcon className="ml-2 h-4 -mr-2 item-end" />
              </Button>
              {/* <Button type="secondary" href="/contact">
                INQUIRE NOW{" "}
                <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
              </Button> */}
            </div>
            {/* <div className="flex-grow min-h-20"></div> */}
          </div>
          <div className="m-2 bg-white">
            {product?.images?.length > 0 ? (
              <EmblaCarousel slides={product?.images} />
            ) : (
              <Image
                alt="product valve"
                src={urlFor(event?.coverImage)?.url?.()}
                width="640"
                height="640"
                className="border border-[var(--grid-color)] object-cover aspect-square w-full"
              />
            )}
          </div>
        </div>
      </Section>

      {/* DESC */}
      {product?.body ? (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-t-[var(--grid-color)]">
            <div className="px-4 py-8">
              <Text as="h2" font="expanded" scale="h7">
                EVENT DESCRIPTION
              </Text>
            </div>
            <div className="px-4 py-8">
              <div
                className={`flex flex-col gap-8
                            [&>h2]:my-12 [&>h2]:text-3xl [&>h2]:text-black] [&>h2]:font-inter [&>h2]:font-semibold [&>h2]:tracking-[-0.04em]
                            [&>h3]:my-8 [&>h3]:text-xl [&>h3]:text-black] [&>h3]:font-inter [&>h3]:font-semibold [&>h3]:tracking-[-0.02em]
                            [&>p]:my-0 [&>p]:text-base [&>p]:text-[var(--secondary-color)]] [&>p]:font-inter [&>p]:font-medium [&>p]:tracking-[-0.02em] [&>p]:leading-7
                            [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:pb-2 [&>ul>li]:text-base [&>ul>li]:text-black]/90 [&>ul>li]:font-inter [&>ul>li]:font-medium [&>ul>li]:tracking-[-0.02em] [&>ul>li]:leading-7
                `}
              >
                <BlockContent value={product?.body} />
              </div>
            </div>
          </div>
        </Section>
      ) : (
        <></>
      )}

      {/* EVENT IMAGES */}
      {event?.images?.length > 0 ? <Events events={event?.images} /> : <></>}

      {/* EVENT REGISTER */}
      {event?.link ? (
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 border-y border-y-[var(--grid-color)]">
            <div className="px-4 py-8">
              <Text as="h2" font="expanded" scale="h7">
                REGISTER NOW
              </Text>
            </div>
            <div className="w-full h-[44rem]">
              <iframe
                className="scroll-mt-30 overflow-hidden"
                src={event?.link}
                width="100%"
                height="100%"
                id="luma-iframe"
                scrolling="no"
                frameBorder="0"
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </Section>
      ) : (
        <></>
      )}

      {/* CTA */}
      <CTA />
    </Page>
  );
}
