import { Headline } from "@/components/molecules/headline";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";

export default function Home() {
  return (
    <Page>
      <Section>
        <div className="px-4 py-20">
          <Headline label="ERROR 404" title="PAGE NOT FOUND" />
        </div>
      </Section>
    </Page>
  );
}
