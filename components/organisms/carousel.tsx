"use client";

import { Button } from "../atoms/button";
import Image from "next/image";
import { Text } from "../atoms/text";
import Section from "../utils/section";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoscroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: false, startDelay: 0 }),
  ]);
  return (
    <Section contained={false}>
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="py-8 flex flex-row px-4 gap-4 embla__container">
          {new Array(8).fill(0).map((o, i) => (
            <div
              key={i}
              className="embla__slide aspect-square border bg-white drop-shadow-xl flex flex-col"
            >
              <div className="h-64 md:h-96 w-[20rem] md:w-[30rem] m-4 border border-[var(--grid-color)] bg-white overflow-hidden">
                <Image
                  alt="product valve"
                  src="/valve.jpg"
                  width="640"
                  height="640"
                  className="object-cover h-full"
                />
              </div>
              <div className="pb-4 flex flex-col flex-grow w-full">
                <div className="px-4 pb-2 flex flex-row">
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    Ball Valve
                  </Text>
                  <div className="flex-grow" />
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    #REF1089
                  </Text>
                </div>
                {/* <Text as="p" scale="p3" font="ibm-plex" className="">
                    {label}
                  </Text> */}
                <div className="flex-grow" />

                <Text
                  as="h3"
                  scale="h7"
                  font="inter"
                  className="px-4 py-4 font-semibold"
                >
                  Side Entry Floating Ball Valve
                </Text>
                {/* <Text
                    as="p"
                    scale="p1"
                    font="inter"
                    className="mt-1 w-full max-w-[40rem] font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
                  >
                    {desc}
                  </Text> */}

                <div className="px-4 flex flex-col md:flex-row gap-4">
                  <Button className="md:flex-grow" type="primary">
                    TECHNICAL SPECIFICATIONS
                  </Button>
                  <Button className="md:flex-grow" type="secondary">
                    GET QUOTE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
