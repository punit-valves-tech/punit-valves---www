import Section from "@/components/utils/section";
import Image from "next/image";
import Link from "next/link";

export const CTA = () => (
  <Section>
    <div className="py-16 sm:py-24 md:py-32 lg:py-40">
      <Link href="/contact">
        <Image
          unoptimized
          src="/cta-v0.png"
          width="1920"
          height="400"
          alt="cta"
          className="hidden md:block -ml-[0.5px]"
        />
        <Image
          unoptimized
          src="/cta-v0-mobile.png"
          width="1324"
          height="964"
          alt="cta"
          className="block md:hidden"
        />
      </Link>
    </div>
  </Section>
);
