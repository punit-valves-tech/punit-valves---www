import { Headline } from "@/components/molecules/headline";
import { CTA } from "@/components/organisms/cta";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <Page>
      <Section>
        <div className="px-4 pt-40">
          <Headline
            label="ERROR 404"
            title="VALVE NOT FOUND"
            desc={
              <>
                Oops! It seems you’ve taken a wrong turn in our valve maze. The
                page you’re looking for might have been moved, deleted, or
                perhaps it never existed. But don’t worry, we’re here to help
                you find your way back.
              </>
            }
            primary={{
              type:"primary",
              children: <>GO TO HOME  <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" /></>,
              href: "/"
            }}
            secondary={{
              type:"secondary",
              children: <>VIEW ALL PRODUCTS <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" /></>,
              href: "/products"
            }}
          />
        </div>
      </Section>
      <CTA />
    </Page>
  );
}
