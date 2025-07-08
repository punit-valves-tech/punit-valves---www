import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import { BlockContent } from "@/components/utils/portable-text";
import Section from "@/components/utils/section";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import { productQuery } from "@/lib/sanity/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const revalidate = 0;

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
      {/* HERO */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square m-2 border border-[var(--grid-color)] bg-white">
            <Image
              alt="product valve"
              src={urlFor(product?.image).url()}
              width="640"
              height="640"
              className="object-cover aspect-square w-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex-grow min-h-20"></div>
            <div className="px-4">
              <Text as="p" scale="p3" font="ibm-plex" className="">
                SINCE 1976
              </Text>
              <Text
                as="h1"
                scale="h5"
                font="expanded"
                className="-ml-0.5 mt-2 uppercase"
              >
                {product?.name}
              </Text>
              <Text
                as="p"
                scale="p1"
                font="inter"
                className=" mt-4 font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
              >
                We has been delivering high-quality industrial valve solutions
                with precision engineering and exceptional performance.
              </Text>
              <div className=" mt-6 flex flex-col md:flex-row gap-4">
                <Button type="primary" />
                <Button type="secondary" />
              </div>
            </div>
            <div className="flex-grow min-h-20"></div>
          </div>
        </div>
      </Section>

      {/* DESC */}
      <Section>
        <div className="grid grid-cols-2 border-t border-t-[var(--grid-color)]">
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
        <div className="grid grid-cols-2 border-t border-t-[var(--grid-color)]">
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
                  <tr className="w-full grid grid-cols-8 py-4 px-4 last:border-b last:border-b-[var(--grid-color)] border-t border-t-[var(--grid-color)]" key={i}>
                    <td className="col-span-3"><Text as="p" scale="p3" font="ibm-plex" className="uppercase">{o.label}</Text></td>
                    <td className="col-span-5"><Text as="p" scale="p3" font="ibm-plex">{o.value}</Text></td>
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
