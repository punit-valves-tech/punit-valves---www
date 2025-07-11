import { Carousel } from "@/components/organisms/carousel";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { CTA } from "@/components/organisms/cta";
import { HeroV0 } from "@/components/organisms/hero-v0";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import { ProductCatalog } from "@/components/organisms/product-catalog";
import { Testimonials } from "@/components/organisms/testimonials";
import { sanityFetch } from "@/lib/sanity/live";
import { allProductsQuery } from "@/lib/sanity/queries";


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

      {/* PRODUCT CATALOG */}
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
