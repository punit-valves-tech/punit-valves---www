import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";

export default function Home() {
  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="BLOG"
            title={<>NEWS AND UPDATES</>}
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
        <div className="grid grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((o, i) => (
            <div
              key={i}
              className="w-full border-t border-t-[var(--grid-color)] nth-last-2:border-b nth-last-2:border-b-[var(--grid-color)] last:border-b last:border-b-[var(--grid-color)]"
            >
              <div className="h-64 flex flex-col bg-white mx-1 px-3 py-4">
              <div className="w-full flex flex-row items-center">
                <div className=" justify-start text-black text-xs font-medium font-['Inter'] leading-none">
                  Arth Gajjar
                </div>
                <div className="flex-grow" />
                <div className="justify-end text-neutral-500 text-xs  leading-none">
                  June 2, 2025 /{" "}
                  <span className="text-red-700">Engineering</span>
                </div>
              </div>
              <div className="flex-grow" />
              <div className="text-black text-xl font-semibold font-['Inter'] leading-7">
                Why Leak-Proof Valves Are the Backbone of Modern Industry
              </div>
              <div className="text-neutral-500 text-sm font-medium font-['Inter'] leading-tight">
                Discover how leak-proof designs ensure zero downtime and maximum
                safety in high-stakes industries like oil and gas.
              </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* CTA */}
      <CTA />
    </Page>
  );
}
