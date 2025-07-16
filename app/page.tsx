import { Carousel } from "@/components/organisms/carousel";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { CTA } from "@/components/organisms/cta";
import { HeroV0 } from "@/components/organisms/hero-v0";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import { ProductCatalog } from "@/components/organisms/product-catalog";
import { Testimonials } from "@/components/organisms/testimonials";
import { ORIGIN } from "@/lib/content/constants";
import { sanityFetch } from "@/lib/sanity/live";
import { allProductsQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Punit Valves | Industrial Valve Manufacturer",
  description:
    "Discover Punit Valves, a trusted manufacturer of high-quality industrial valves. Explore reliable, precision-engineered solutions for global industries.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title: "Punit Valves | Industrial Valve Manufacturer",
    description:
    "Discover Punit Valves, a trusted manufacturer of high-quality industrial valves. Explore reliable, precision-engineered solutions for global industries.",
    url: `/`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-home.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default async function Home() {
  const [{ data: products }] = await Promise.all([
    sanityFetch({ query: allProductsQuery }),
  ]);
  return (
    <Page>
      {/* HERO */}
      <HeroV0 />

      {/* LOGO CLOUD */}
      <LogoCloud />

      <ProductCatalog />
      <Carousel products={products} />

      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </Page>
  );
}
