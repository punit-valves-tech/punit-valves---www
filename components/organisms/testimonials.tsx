/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Section from "@/components/utils/section";
import { Text } from "../atoms/text";
import { QuoteIcon, UserIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 1,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);
  return (
    <Section>
      <div className="pt-40 w-full overflow-hidden embla" ref={emblaRef}>
        <div className="py-8 flex flex-row px-4 gap-4 embla_container">
          {TESTIMONIALS.map((o: any, i: any) => (
            <div
              key={i}
              className="h-96 aspect-square border bg-white drop-shadow-xl flex flex-col p-4"
            >
              <div className=" pb-2 flex flex-row">
                {/* <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                  Ball Valve
                </Text>
                <div className="flex-grow" />
                <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                  #REF1089
                </Text> */}
                <QuoteIcon className="text-[var(--secondary-color)]" />
              </div>
              {/* <Text as="p" scale="p3" font="ibm-plex" className="">
                    {label}
                  </Text> */}
              {/* <div className="flex-grow" /> */}

              <Text as="h3" scale="p2" font="ibm-plex" className="py-4">
                {o?.quote}
              </Text>
              <div className="flex-grow" />
              <div className="flex flex-row items-center gap-4">
                <UserIcon />
                <div>
                  <Text
                    as="p"
                    scale="p3"
                    font="inter"
                    className="text-[var(--secondary-color)]"
                  >
                    {o?.author?.name} <br />
                    {o?.author?.designation}{" "}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const TESTIMONIALS = [
  {
    quote: (
      <>
        We are supplying PUNIT brand butterfly valves since last 40 years to our
        clients from sectors as diverse as textile processing, chemicals,
        cements, chemical equipment&apos;s, pulp and paper industries and are
        very happy to state that PUNIT brand valves have lived up and sometimes
        even exceeded our clients&apos; expectations.
      </>
    ),
    author: {
      name: "Mr. Vishal Shah",
      designation: "Avashi Engineering And Chemical Corporation",
    },
  },
  {
    quote: (
      <>
        We , affirm that Punit Valves have supplied Butterfly Valves for our
        various Sugar Client since last 3 years . The product quality , delivery
        schedules and business practise of Punit Valves have been quite
        exemplary .
      </>
    ),
    author: {
      name: "Parimal Patel",
      designation: "M/s Maruti Trading Corporation",
    },
  },
  {
    quote: (
      <>
        I appreciate the sense of professional commitment displayed by you & we
        are very happy with the quality of valves.
      </>
    ),
    author: {
      name: "Mr. Saurabh Chaudhary",
      designation: "",
    },
  },
];
