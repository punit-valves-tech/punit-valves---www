import { Headline } from "@/components/molecules/headline";
import Section from "@/components/utils/section";
import { ArrowRightIcon } from "lucide-react";

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
          type: "primary",
          children: (
            <>
              VIEW ALL PRODUCTS{" "}
              <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
            </>
          ),
          href: "/products",
        }}
      />
    </div>
  </Section>
);
