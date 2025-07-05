import { Headline } from "@/components/molecules/headline";
import Section from "@/components/utils/section";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/text";

export const CompanyOverview = () => (
  <Section>
    <div className="pt-40 flex flex-col">
      <Headline
        label={<>ABOUT US</>}
        title={<>Company Overview</>}
        desc={<>We are a leading industrial valve manufacturer with a global perspective and local expertise. We provide deeply localized service and highly customized production to meet the unique demands of various industries.</>}
        primary={{
          type:"secondary",
          children: <>LEARN MORE</>
        }}
      />
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4">
        {[1, 0, 1, 0].map((o, i) => (
          <div key={i} className={cn(o ? "flex flex-col justify-between" : "invisible", "aspect-square border-y border-y-[var(--grid-color)] px-4 py-8")}>
            <Text as="p" scale="h2" font="ibm-plex" className="">250+</Text>
            <Text as="p" scale="p1" font="archivo" className="text-[var(--secondary-color)] uppercase">TONS OUTPUT / year</Text>
          </div>
        ))}
        {[0, 1, 0, 1].map((o, i) => (
          <div key={i} className={cn(o ? "flex flex-col justify-between" : "invisible", "-mt-[1px] aspect-square border-y border-y-[var(--grid-color)] px-4 py-8")}>
            <Text as="p" scale="h2" font="ibm-plex" className="">250+</Text>
            <Text as="p" scale="p1" font="archivo" className="text-[var(--secondary-color)] uppercase">TONS OUTPUT / year</Text>
          </div>
        ))}
      </div>
    </div>
  </Section>
)