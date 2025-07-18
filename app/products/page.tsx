/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import Image from "next/image";
import Link from "next/link";
import { allProductsQuery } from "@/lib/sanity/queries";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import { ORIGIN } from "@/lib/content/constants";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Punit Valves | Gate, Ball, Butterfly Valves and more",
  description:
    "Browse Punit Valves’ range of products, including gate, ball, butterfly, check, needle, globe and more, engineered for durability and precision.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/products`,
  },
  openGraph: {
    title: "Punit Valves | Gate, Ball, Butterfly Valves and more",
    description:
      "Browse Punit Valves’ range of products, including gate, ball, butterfly, check, needle, globe and more, engineered for durability and precision.",
    url: `/products`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-products.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default async function ProductsPage() {
  const [{ data: products }] = await Promise.all([
    sanityFetch({ query: allProductsQuery }),
  ]);

  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="VALVES"
            titleAs="h1"
            title={<>PRODUCT CATALOG</>}
            desc={
              <>
                Showcasing our precision-engineered industrial valves, each
                product is crafted to meet rigorous industry standards, ensuring
                reliability and efficiency for your operations.
              </>
            }
          />
        </div>
      </Section>

      <Section
        sectionProps={{
          className: "border-y border-y-[var(--grid-color)]",
        }}
      >
        <div className="grid grid-cols-4 -mt-[1px]">
          {/* <div className="col-span-1">

          </div> */}
          <div className="border-x border-x-[var(--grid-color)] col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
            {products.map((o: any, i: any) => (
              <Link
                href={`/products/${o.slug}`}
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
                    {/* <Button className="md:flex-grow" type="primary">
                    TECHNICAL SPECIFICATIONS
                  </Button> */}
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

      {/* CTA */}
      <CTA />
    </Page>
  );
}
