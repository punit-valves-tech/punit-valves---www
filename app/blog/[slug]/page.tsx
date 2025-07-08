import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import { BlockContent } from "@/components/utils/portable-text";
import Section from "@/components/utils/section";
import { sanityFetch, urlFor } from "@/lib/sanity/live";
import { articleQuery } from "@/lib/sanity/queries";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const revalidate = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ArticlePage(props: any) {
  const params = await props.params;
  const [{ data: article }] = await Promise.all([
    sanityFetch({ query: articleQuery, params }),
  ]);

  if (!article?._id) {
    return notFound();
  }

  return (
    <Page>
      <Section>
        <div className="flex flex-col py-20">
          <div className="px-4">
            <Link href="/blog" className="flex flex-row">
              <ArrowLeftIcon className="h-4 mr-2" />
              <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                Blog
              </Text>
            </Link>
          </div>
          <Headline
            title={article.title}
            // desc="Stay ahead in the world of flow control. Explore industry trends, technical guides, and innovative solutions from our experts."
          />
          <Image
            className="mt-10 w-full aspect-[16/9] object-cover"
            src={urlFor(article.mainImage).url()}
            alt="article hero"
            height="1080"
            width="1920"
          />
        </div>
      </Section>
      <Section
        guides={false}
        sectionProps={{ className: "border-y border-y-[var(--grid-color)]" }}
      >
        <div className="w-full m-auto max-w-xl py-8">
          <div
            className={`px-2 
          [&>h2]:my-12 [&>h2]:text-3xl [&>h2]:text-black] [&>h2]:font-inter [&>h2]:font-semibold [&>h2]:tracking-[-0.04em]
          [&>h3]:my-8 [&>h3]:text-xl [&>h3]:text-black] [&>h3]:font-inter [&>h3]:font-semibold [&>h3]:tracking-[-0.02em]
          [&>p]:my-0 [&>p]:text-base [&>p]:text-[var(--secondary-color)]] [&>p]:font-inter [&>p]:font-medium [&>p]:tracking-[-0.02em] [&>p]:leading-7
          [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:pb-2 [&>ul>li]:text-base [&>ul>li]:text-black]/90 [&>ul>li]:font-inter [&>ul>li]:font-medium [&>ul>li]:tracking-[-0.02em] [&>ul>li]:leading-7
          `}
          >
            <BlockContent value={article.body} />
          </div>
        </div>
      </Section>
      <CTA />
    </Page>
  );
}
