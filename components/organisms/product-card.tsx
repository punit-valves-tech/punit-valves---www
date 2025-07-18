/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "../atoms/button";
import { Text } from "../atoms/text";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const ProductCard = ({ product }: any) => {
  return (
    <Link
      href={`/products/${product?.slug}`}
      className="w-[18rem] embla__slide bg-white border border-[var(--grid-color)] hover:border-black drop-shadow-xl flex flex-col"
    >
      <div className="aspect-square w-full p-4">
        <Image
          alt={product?.name}
          src={product?.image}
          width="640"
          height="640"
          className="border border-[var(--grid-color)] object-cover w-full aspect-square"
        />
      </div>
      <div className="pb-4 flex flex-col flex-grow w-full">
        <div className="px-4 pb-2 flex flex-row text-[var(--secondary-color)]">
          <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
            {product?.class?.title}
          </Text>
          <div className="flex-grow" />
          <Text as="p" scale="p3" font="ibm-plex" className="uppercase">
            #REF0{product._id.substr(1, 4)}
          </Text>
        </div>
        <div className="flex-grow" />

        <Text
          as="h3"
          scale="h9"
          font="inter"
          className="px-4 py-4 tracking-normal font-semibold"
        >
          {product?.name}
        </Text>

        <div className="px-4 flex flex-col gap-4">
          <Button
            href={`/products/${product?.slug}`}
            className="drop-shadow-none md:flex-grow"
            type="primary"
          >
            TECHNICAL SPECIFICATIONS{" "}
            <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
          </Button>
        </div>
      </div>
    </Link>
  );
};
