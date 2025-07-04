import { HeadlineV1 } from "@/components/molecules/headline";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";

export default function Home() {
  return (
    <Page>
      {/* HERO */}

      <Section>
        <div className="py-20">
        <HeadlineV1
          title={
            <>
              ABOUT US — <br />
              <span className="text-[var(--primary-color)]">PUNIT</span> VALVES.
            </>
          }
          desc={
            <>
              We are driven by a passion for engineering excellence and
              innovation in the valve manufacturing industry. Our team of
              dedicated experts is committed to providing solutions that
              optimize operations and drive efficiency for businesses worldwide.
            </>
          }
        />
        </div>
      </Section>

      <Section>
      <div className="aspect-video m-2 border border-[var(--grid-color)] bg-white overflow-hidden">
        <iframe src="https://my.spline.design/untitled-1054cea4b1f96f01251eb70be782e725/" className="-mt-[10%] scale-125" width="110%" height="150%" />
      </div>
      </Section>

      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      <CTA />
    </Page>
  );
}
