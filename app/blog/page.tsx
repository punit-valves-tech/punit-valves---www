import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import { sanityFetch } from "@/lib/sanity/live";
import { allArticlesQuery } from "@/lib/sanity/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export default async function Blog() {
    const [{ data: articles }] = await Promise.all([
      sanityFetch({ query: allArticlesQuery }),
    ]);
  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="BLOG"
            title={<>ARTICLES AND UPDATES</>}
            desc={
              <>
                Stay ahead in the world of flow control. Explore industry
                trends, technical guides, and innovative solutions from our
                experts.
              </>
            }
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {articles.map((o: any, i: any) => (
            <Link
              key={i}
              href={`/blog/${o.slug}`}
              className="w-full hover:bg-white hover:border! hover:border-black! hover:drop-shadow-2xl! border border-transparent border-t border-t-[var(--grid-color)] nth-last-2:border-b nth-last-2:border-b-[var(--grid-color)] last:border-b last:border-b-[var(--grid-color)]"
            >
              <div className="h-72 flex flex-col bg-white mx-1 px-3 py-4">
              <div className="w-full flex flex-row items-center">
                <Text as="p" scale="p3" font="inter" className="text-[var(--secondary-color)] font-medium tracking-normal">
                  {o.author.name}
                </Text>
                <div className="flex-grow" />
                <Text as="p" scale="p3" font="inter" className="text-[var(--secondary-color)] font-medium tracking-normal">
                  June 2, 2025 /{" "}
                  <span className="text-red-700">Engineering</span>
                </Text>
                

              </div>
              <div className="flex-grow" />
              <Text as="h2" scale="h7" font="inter" className="pr-8 font-semibold tracking-normal">
                {o.title}
              </Text>
              <Text as="p" scale="p1" font="inter" className="pr-8 mt-2 text-[var(--secondary-color)] font-medium tracking-normal">
                Discover how leak-proof designs ensure zero downtime and maximum
                safety in high-stakes industries like oil and gas.
              </Text>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      {/* CTA */}
      <CTA />
    </Page>
  );
}
