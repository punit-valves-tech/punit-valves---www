import { Carousel } from "@/components/organisms/carousel";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { CTA } from "@/components/organisms/cta";
import { HeroV0 } from "@/components/organisms/hero-v0";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import { ProductCatalog } from "@/components/organisms/product-catalog";
import { Testimonials } from "@/components/organisms/testimonials";

export default function Home() {
  return (
    <Page>
      {/* HERO */}
      <HeroV0 />

      {/* LOGO CLOUD */}
      <LogoCloud />

      {/* PRODUCT CATALOG */}
      <ProductCatalog />

      <Carousel />

      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </Page>
  );
}
