import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import Image from "next/image";
import { VALVES } from "./products";
import Link from "next/link";

export default function Home() {

  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="VALVES"
            title={<>PRODUCT CATALOG</>}
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
        <div className="grid grid-cols-4">
          {/* <div className="col-span-1">

          </div> */}
          <div className="col-span-4 grid grid-cols-4 gap-y-8">

          {VALVES.map((o, i) => (
            <Link
              href="/products/aluminum-wafer-type-centric-butterfly-valve"
              key={i}
              className="bg-[var(--hover-color)] hover:border hover:border-black hover:bg-white hover:drop-shadow-2xl border-x border-x-transparent p-4 border-y border-y-[var(--grid-color)]  flex flex-col"
            >
              <div className="w-full aspect-square border border-[var(--grid-color)] bg-white overflow-hidden">
                <Image alt="product valve" src="/valve.jpg" width="640" height="640" className="object-cover aspect-square w-full" />
              </div>
              <div className="pt-4 flex flex-col flex-grow w-full">
                <div className="pb-2 flex flex-row text-[var(--secondary-color)]">
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    {o.valveType}
                  </Text>
                  <div className="flex-grow" />
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    #REF1089
                  </Text>
                </div>
                <div className="flex-grow" />

                <Text
                  as="h3"
                  scale="p1"
                  font="inter"
                  className="py-4 font-semibold"
                >
                  {o.subType}
                </Text>

                <div className="flex flex-col gap-4">
                  {/* <Button className="md:flex-grow" type="primary">
                    TECHNICAL SPECIFICATIONS
                  </Button> */}
                  <Button className="md:flex-grow" type="secondary">
                    LEARN MORE
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
