import { Headline } from "@/components/molecules/headline";
import Section from "@/components/utils/section";

export const ProductCatalog = () => (
  <Section>
    <div className="pt-40 flex flex-col">
      <Headline
        label={<>VALVES</>}
        title={<>Product Catalog</>}
        desc={<>Explore detailed specifications, view engineering drawings, product descriptions and find the ideal valve for your needs.</>}
      />
      <div className="py-8 flex flex-row px-4 gap-4 overflow-x-auto">
        {new Array(4).fill(0).map((o,i) => (
          <div key={i} className="h-96 aspect-square border bg-white drop-shadow-xl">

          </div>
        ))}
      </div>
    </div>
  </Section>
)