import { HeadlineV1 } from "@/components/molecules/headline";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import { Testimonials } from "@/components/organisms/testimonials";
import Section from "@/components/utils/section";
import { ORIGIN } from "@/lib/content/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Punit Valves | 40+ Years of Excellence",
  description:
    "Learn about Punit Valves’ legacy, commitment to quality, and customized valve solutions for industries worldwide, backed by over 40 years of expertise.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/about`,
  },
  openGraph: {
    title: "About Punit Valves | 40+ Years of Excellence",
    description:
      "Learn about Punit Valves’ legacy, commitment to quality, and customized valve solutions for industries worldwide, backed by over 40 years of expertise.",
    url: `/about`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-about.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <Page>
      {/* HERO */}

      <Section>
        <div className="py-20">
          <HeadlineV1
            titleAs="h1"
            title={
              <>
                ABOUT US — <br />
                <span className="text-[var(--primary-color)]">PUNIT</span>{" "}
                VALVES.
              </>
            }
            desc={
              <>
                {/* We are driven by a passion for engineering excellence and
              innovation in the valve manufacturing industry. Our team of
              dedicated experts is committed to providing solutions that
              optimize operations and drive efficiency for businesses worldwide. */}
                Adopting quality as our prime objective and ethical business
                practices, we have carved a niche as one of the trusted
                manufacturers & suppliers of industrial valves.
              </>
            }
          />
        </div>
      </Section>

      <Section>
        <div className="aspect-video m-2 border border-[var(--grid-color)] bg-white overflow-hidden">
          <iframe
            src="https://my.spline.design/untitled-1054cea4b1f96f01251eb70be782e725/"
            className="-mt-[10%] scale-125"
            width="110%"
            height="150%"
          />
        </div>
      </Section>

      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      {/* TESTIMONIALS */}
      <Testimonials />

      <CTA />
    </Page>
  );
}
