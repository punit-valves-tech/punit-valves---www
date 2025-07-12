/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "../atoms/button";
import { Text } from "../atoms/text";
import Section from "../utils/section";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const Carousel = ({ products }: any) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 1,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);
  return (
    <Section contained={false}>
      <div className="embla w-full" ref={emblaRef}>
        <div className="flex flex-row px-4 gap-4 embla__container">
          {products.map((o: any, i: any) => (
            <Link
              href={`/products/${o?.slug}`}
              key={i}
              className="embla__slide border border-[var(--grid-color)] hover:border-black bg-white drop-shadow-2xl flex flex-col"
            >
              <div className="aspect-square w-[20rem] m-4 border border-[var(--grid-color)] bg-[var(--grid-color)] overflow-hidden">
                <Image
                  alt={o?.name}
                  src={o?.image}
                  width="640"
                  height="640"
                  className="object-cover h-full"
                />
              </div>
              <div className="pb-4 flex flex-col flex-grow w-full">
                <div className="px-4 pb-2 flex flex-row text-[var(--secondary-color)]">
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    {o?.class?.title}
                  </Text>
                  <div className="flex-grow" />
                  <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
                    #REF0{o._id.substr(1, 4)}
                  </Text>
                </div>
                {/* <Text as="p" scale="p3" font="ibm-plex" className="">
                    {label}
                  </Text> */}
                <div className="flex-grow" />

                <Text
                  as="h3"
                  scale="h9"
                  font="inter"
                  className="px-4 py-4 tracking-normal font-semibold"
                >
                  {o?.name}
                </Text>
                {/* <Text
                    as="p"
                    scale="p1"
                    font="inter"
                    className="mt-1 w-full max-w-[40rem] font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
                  >
                    {desc}
                  </Text> */}

                <div className="px-4 flex flex-col gap-4">
                  <Button
                    href={`/products/${o?.slug}`}
                    className="drop-shadow-none md:flex-grow"
                    type="primary"
                  >
                    TECHNICAL SPECIFICATIONS{" "}
                    <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
                  </Button>
                  {/* <Button
                    href="/contact"
                    className="md:flex-grow"
                    type="secondary"
                  >
                    GET QUOTE{" "}
                    <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
                  </Button> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
