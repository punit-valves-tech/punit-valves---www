/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@/components/atoms/text";
import { Headline } from "@/components/molecules/headline";
import { Events } from "@/components/organisms/event-showcase";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import { ORIGIN } from "@/lib/content/constants";
import { sanityFetch } from "@/lib/sanity/live";
import { allEventsQuery } from "@/lib/sanity/queries";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Punit Valves Events | Industry Trade Shows",
  description:
    "Join Punit Valves at global trade shows and events. Discover our latest valve innovations and connect with our experts for industrial solutions.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/events`,
  },
  openGraph: {
    title: "Punit Valves Events | Industry Trade Shows",
    description:
      "Join Punit Valves at global trade shows and events. Discover our latest valve innovations and connect with our experts for industrial solutions.",
    url: `/events`,
    siteName: "Punit Industrial Valves",
    images: [
      {
        url: `${ORIGIN}/og-events.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const EventsPage = async () => {
  const [{ data: events }] = await Promise.all([
    sanityFetch({ query: allEventsQuery }),
  ]);
  return (
    <Page>
      <Section>
        <div className="py-20">
          <Headline
            label="INDUSTRIAL TRADE SHOWS"
            titleAs="h1"
            title={<>GLOBAL EVENTS AND TRADE SHOWS</>}
            desc={
              <>
                Join Punit Valves at global trade shows and events. Discover our
                latest valve innovations and connect with our experts for
                industrial solutions.
              </>
            }
          />
        </div>
      </Section>
      <Section>
        <div className="py-20">
          <Headline
            label="EVENTS AND TRADE SHOWS"
            titleAs="h2"
            title={<>UPCOMING EVENTS</>}
            desc={<></>}
          />
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {events.map((o: any, i: any) => (
            <Link
              key={i}
              href={o?.link ?? ""}
              target={o?.link?.startWith?.("http") ? "_blank" : "_self"}
              className="w-full hover:bg-white hover:border! hover:border-black! hover:drop-shadow-2xl! border border-transparent border-t border-t-[var(--grid-color)] nth-last-2:border-b nth-last-2:border-b-[var(--grid-color)] last:border-b last:border-b-[var(--grid-color)]"
            >
              <div className="h-72 flex flex-col bg-white mx-1 px-3 py-4">
                <div className="w-full flex flex-row items-center">
                  <Text
                    as="p"
                    scale="p3"
                    font="inter"
                    className="text-[var(--secondary-color)] font-medium tracking-normal"
                  >
                    {o?.location}
                  </Text>
                  <div className="flex-grow" />
                  <Text
                    as="p"
                    scale="p3"
                    font="inter"
                    className="text-[var(--secondary-color)] font-medium tracking-normal"
                  >
                    {formatDate(o.dateTime)} /{" "}
                    <span className="text-red-700">Trade Show</span>
                  </Text>
                </div>
                <div className="flex-grow" />
                <div className="flex flex-row gap-4">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {o?.tags?.map((t: any, i: any) => (
                    <Text
                      key={i}
                      scale="p3"
                      font="ibm-plex"
                      className="py-2 tracking-normal uppercase text-[var(--primary-color)]"
                    >
                      #{t?.title}
                    </Text>
                  ))}
                </div>
                <Text
                  as="h2"
                  scale="h7"
                  font="inter"
                  className="pr-8 font-semibold tracking-normal"
                >
                  {o.title}
                </Text>
                <Text
                  as="p"
                  scale="p1"
                  font="inter"
                  className="pr-8 mt-2 text-[var(--secondary-color)] font-medium tracking-normal truncate"
                >
                  {o.description}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <div className="py-20">
          <Headline
            label="EVENTS AND TRADE SHOWS"
            titleAs="h2"
            title={<>Past Events</>}
            desc={<></>}
          />
        </div>
      </Section>
      <Events events={PAST_EVENTS} />
    </Page>
  );
};

export default EventsPage;

const PAST_EVENTS = [
    {
        images: [
            // { src: "/assets/events/Event-Tech-Vapi-2024-1.heic", alt: "Tech-Vapi-2024-1" },
            { src: "/assets/events/Event-Tech-Vapi-2024-2.jpg", alt: "Tech-Vapi-2024-2" },
            { src: "/assets/events/Event-Tech-Vapi-2024-3.jpg", alt: "Tech-Vapi-2024-3" },
            { src: "/assets/events/Event-Exhibition-Tech-Vapi-2024-4.jpg", alt: "Exhibition-Tech-Vapi-2024-4" },
        ]
    },
    {
        images: [
            // { src: "/assets/events/Event-Dahej-Expo-2024-1.heic", alt: "Dahej-Expo-2024-1" },
            { src: "/assets/events/Event-Dahej-Expo-2024-2.jpg", alt: "Dahej-Expo-2024-2" },
            { src: "/assets/events/Event-Dahej-Expo-2024-3.jpg", alt: "Dahej-Expo-2024-3" },
        ]
    },
    {
        images: [
            { src: "/assets/events/Event-Surat-Udyog-2024-1.jpg", alt: "Surat-Udyog-2024-1" },
            { src: "/assets/events/Event-Surat-Udyog-2024-2.jpg", alt: "Surat-Udyog-2024-2" },
            { src: "/assets/events/Event-Surat-Udyog-2024-3.jpg", alt: "Surat-Udyog-2024-3" },
        ]
    },
    {
        images: [
            { src: "/assets/events/Event-Surat-Udyog-2025-1.jpg", alt: "Surat-Udyog-2025-1" },
            { src: "/assets/events/Event-Surat-Udyog-2025-2.jpg", alt: "Surat-Udyog-2025-2" },
        ]
    }
];
