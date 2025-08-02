import { Text } from "@/components/atoms/text";
import { TallyForm } from "@/components/molecules/tally-form";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import { ORIGIN } from "@/lib/content/constants";
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Punit Valves | Valve Solutions Experts",
  description:
    "Reach out to Punit Valves for inquiries, technical support, or quotes. Our global team is ready to assist with your industrial valve needs.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/contact`,
  },
  openGraph: {
    title: "Contact Punit Valves | Valve Solutions Experts",
    description:
      "Reach out to Punit Valves for inquiries, technical support, or quotes. Our global team is ready to assist with your industrial valve needs.",
    url: `/contact`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-contact.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Page>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex-grow min-h-20"></div>
            <div className="px-4">
              <Text
                as="h1"
                scale="h4"
                font="expanded"
                className="-ml-0.5 mt-2 uppercase"
              >
                GET IN{" "}
                <span className="text-[var(--primary-color)]">TOUCH</span>
              </Text>

              <div className="flex flex-row items-center gap-2 mt-12">
                <MapPinIcon className="h-6 w-6" />
                <Text as="p" scale="p1" font="expanded" className="">
                  ADDRESS
                </Text>
              </div>
              <Text as="p" scale="p2" font="ibm-plex" className=" mt-1 ml-8">
                {" "}
                K-1/3 G.I.D.C Antalia, Bilimora - Chikhli Road, <br />
                Bilimora - 396325, Dist. Navsari, Gujarat, India. <br />
                <Link
                  href="https://maps.app.goo.gl/eX6NABa3afremgeu5" target="_blank"
                  className="text-blue-600 underline underline-offset-2 flex flex-row items-center gap-1 text-blue-600"
                >
                  Google Maps <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </Text>

              <div className="flex flex-row items-center gap-3 mt-12">
                <PhoneIcon className="h-5 w-5" />
                <Text as="p" scale="p1" font="expanded" className="">
                  PHONE
                </Text>
              </div>

              <Text as="p" scale="p2" font="ibm-plex" className=" mt-1 ml-8">
                Mihir Panchal ——&nbsp;
                <Link
                  href="tel:+919558817397"
                  className="text-blue-600 underline underline-offset-2"
                >
                  +91 95588 17397
                </Link>
                <br />
                Bhavika Panchal ——&nbsp;
                <Link
                  href="tel:+919510412363"
                  className="text-blue-600 underline underline-offset-2"
                >
                  +91 95104 12363
                </Link>
                
              </Text>

              <div className="flex flex-row items-center gap-3 mt-12">
                <MailIcon className="h-5 w-5" />
                <Text as="p" scale="p1" font="expanded" className="">
                  EMAIL
                </Text>
              </div>

              <Text
                as="span"
                scale="p2"
                font="ibm-plex"
                className="text-blue-600 underline underline-offset-2 mt-1 ml-8"
              >
                <Link href="mailto:miracle.etps@gmail.com">
                  miracle.etps@gmail.com
                </Link>
              </Text>
              <br />
              <Text
                as="span"
                scale="p2"
                font="ibm-plex"
                className="text-blue-600 underline underline-offset-2 mt-1 ml-8"
              >
                <Link href="mailto:sales.miracleetps@gmail.com">
                  sales.miracleetps@gmail.com
                </Link>
              </Text>
            </div>
            <div className="flex-grow min-h-10"></div>
          </div>
          <div className="aspect-square m-2 border border-[var(--grid-color)] bg-white overflow-hidde px-4 flex justify-center items-center flex-col">
            <TallyForm formId="waJpNv" />
          </div>
        </div>
      </Section>
      <LogoCloud />
    </Page>
  );
}
