import Section from "@/components/utils/section";
import { Text } from "../atoms/text";
import { QuoteIcon, UserIcon } from "lucide-react";

export const Testimonials = () => (
  <Section>
    <div className="pt-40 flex flex-col">
      {/* <Headline
        label={<>VALVES</>}
        title={<>Product Catalog</>}
        desc={
          <>
            Explore detailed specifications, view engineering drawings, product
            descriptions and find the ideal valve for your needs.
          </>
        }
        primary={{
          type:"secondary",
          children: <>VIEW ALL PRODUCTS <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" /></>,
          href: "/products"
        }}
      /> */}
      <div className="py-8 flex flex-row px-4 gap-4 overflow-x-auto">
        {new Array(4).fill(0).map((o, i) => (
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

              <Text
                as="h3"
                scale="p2"
                font="ibm-plex"
                className="py-4"
              >
                Punit Valves delivered wafer type butterfly valves that exceeded
                our expectations for quality and performance. Their team
                provided tailored solutions that perfectly fit our chemical
                processing plant’s needs, and the BIS certification gave us
                confidence in their reliability.
              </Text>
              <div className="flex-grow" />
              <div className="flex flex-row items-center gap-4">
                <UserIcon />
                <div>
                    <Text as="p" scale="p3" font="inter" className="text-[var(--secondary-color)]">Rakesh Sharma <br/> 
                    Procurement Manager @ ChemTech Industries </Text>
                    </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
