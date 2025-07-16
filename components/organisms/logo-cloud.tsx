import { Text } from "@/components/atoms/text";
import Section from "@/components/utils/section";
import Image from "next/image";

export const LogoCloud = () => (
  <Section
    guides={false}
    sectionProps={{
      className: "bg-[#fafafa] border-y border-y-[var(--grid-color)]",
    }}
  >
    <div className="flex flex-col py-10">
      <Text as="p" scale="p3" font="ibm-plex" className="text-center pb-6">
        TRUSTED BY COMPANIES IN EVERY INDUSTRY
      </Text>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {[
          "/logo-utc.png",
          "/logo-ntf.png",
          "/logo-windson.png",
          "/logo-jkl.png",
        ].map((o, i) => (
            <Image
              key={i}
              className="h-20 w-auto m-auto object-fit"
              src={o}
              width="600"
              height="225"
              alt="client logo"
            />
        ))}
      </div>
    </div>
  </Section>
);
