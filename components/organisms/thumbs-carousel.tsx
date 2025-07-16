/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
// import { Thumb } from './EmblaCarouselThumbsButton'

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      playOnInit: true,
    }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla w-full h-full">
      <div
        className="embla__viewport w-full aspect-square overflow-hidden"
        ref={emblaMainRef}
      >
        <div className="flex flex-row embla__container w-full aspect-square">
          {slides.map((o: any, index) => (
            <Image
              key={index}
              alt="product valve"
              src={urlFor(o).url()}
              width="640"
              height="640"
              className="border border-[var(--grid-color)] object-cover aspect-square w-full"
            />
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport overflow-hidden" ref={emblaThumbsRef}>
          <div className=" embla-thumbs__container flex flex-row items-center gap-2 mt-2">
            {slides.map((o: any, index) => (
              <Image
                key={index}
                alt="product valve"
                src={urlFor(o).url()}
                width="640"
                onClick={() => onThumbClick(index)}
                height="640"
                className={cn(
                  "h-16 w-16 rounded-xs border border-[var(--grid-color)] object-cover aspect-square",
                  selectedIndex === index ? "border-black" : "border-[var(--grid-color)]"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
