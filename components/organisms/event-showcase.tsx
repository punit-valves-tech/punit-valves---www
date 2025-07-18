/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Section from "@/components/utils/section";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export const Events = ({ events }: any) => {
  return (
    <Section>
      <div className="flex flex-col gap-20">
        {events.map((o: any, i: any) => (
          <EventCarousel key={i} event={o} />
        ))}
      </div>
    </Section>
  );
};

const EventCarousel = ({ event }: any) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 1,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);
  return (
    <div
      className="w-full overflow-hidden embla border-x border-x-[var(--grid-color)]"
      ref={emblaRef}
    >
      <div className="flex flex-row px-4 gap-4 embla_container">
        {event?.images?.map((o: any, i: any) => (
          <div 
          key={i}
          className="embla__slide flex flex-col min-w-[100%]">
            <Image
              className="p-4 border border-[var(--grid-color)] drop-shadow-xl bg-white rounded-xs h-[40rem] w-full object-cover"
              src={o?.src}
              alt={o?.alt}
              width={1280}
              height={576}
            />
            <p className="text-center py-4">{o?.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
