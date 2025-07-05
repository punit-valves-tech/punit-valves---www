import { Headline } from "@/components/molecules/headline";
import Section from "@/components/utils/section";
import { Text } from "../atoms/text";
import { Button } from "../atoms/button";

export const ProductCatalog = () => (
  <Section>
    <div className="pt-40 flex flex-col">
      <Headline
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
          children: <>VIEW ALL PRODUCTS</>
        }}
      />
      <div className="py-8 flex flex-row px-4 gap-4 overflow-x-auto">
        {new Array(4).fill(0).map((o, i) => (
          <div key={i} className="aspect-square border bg-white drop-shadow-xl flex flex-col">
            <div className="h-96 w-[30rem] m-4 border border-[var(--grid-color)] bg-white overflow-hidden"></div>
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
                <Button className="md:flex-grow" type="primary">TECHNICAL SPECIFICATIONS</Button>
                <Button className="md:flex-grow" type="secondary">GET QUOTE</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
