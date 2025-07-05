import { Text } from "@/components/atoms/text";
import Section from "@/components/utils/section";

export const LogoCloud = () => (
  <Section guides={false} sectionProps={{ className: "bg-[#fafafb] border-y border-y-[var(--grid-color)]" }}>
    <div className="flex flex-col py-10">
      <Text as="p" scale="p3" font="ibm-plex" className="text-center pb-6">TRUSTED BY COMPANIES IN EVERY INDUSTRY</Text>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {new Array(8).fill(0).map((o, i) => (
          <div key={i} className="h-16 mx-10 my-4 bg-black/20" />
        ))}
      </div>
    </div>
  </Section>
)