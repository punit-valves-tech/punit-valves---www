import { Text } from "@/components/atoms/text";
import Section from "@/components/utils/section";
import Image from "next/image";

export const LogoCloud = () => (
  <Section
    guides={false}
    sectionProps={{
      className: "bg-[#fafafb] border-y border-y-[var(--grid-color)]",
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
          "/logo-jkl.png",
          "/logo-utc.png",
        ].map((o, i) => (
          <div key={i} className="h-16 mx-10 my-4">
            <Image
              className="h-full object-cover"
              src={o}
              width="600"
              height="225"
              alt="client logo"
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
);
