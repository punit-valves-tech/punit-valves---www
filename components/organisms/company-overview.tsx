/* eslint-disable @typescript-eslint/no-explicit-any */
import { Headline } from "@/components/molecules/headline";
import Section from "@/components/utils/section";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/text";
import { ArrowRightIcon } from "lucide-react";

export const CompanyOverview = () => (
  <Section>
    <div className="pt-40 flex flex-col">
      <Headline
        label={<>ABOUT US</>}
        title={<>Company Overview</>}
        desc={<>MIRACLE ENTERPRISE is located at Bilimora, Dist. Navsari,
          Gujarat State, India. Miracle Enterprise is a sister concern of B. H. Smith
          And Sons which was primarily engage in manufacturing of Industrial
          valves since 1976.</>}
        primary={{
          type:"primary",
          children: <>LEARN MORE <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" /></>,
          href: "/about"
          
        }}
      />
      <div className="hidden md:grid mt-8 grid grid-cols-2 md:grid-cols-4">
        {[STATS[0], 0, STATS[1], 0].map((o: any, i: any) => (
          <div key={i} className={cn(o ? "flex flex-col justify-between" : "invisible", "aspect-square border-y border-y-[var(--grid-color)] px-4 py-8")}>
            <Text as="p" scale="h2" font="ibm-plex" className="">{o.stat}</Text>
            <Text as="p" scale="p1" font="archivo" className="text-[var(--secondary-color)] uppercase">{o.desc}</Text>
          </div>
        ))}
        {[0, STATS[2], 0, STATS[3]].map((o: any, i: any) => (
          <div key={i} className={cn(o ? "flex flex-col justify-between" : "invisible", "-mt-[1px] aspect-square border-y border-y-[var(--grid-color)] px-4 py-8")}>
            <Text as="p" scale="h2" font="ibm-plex" className="">{o.stat}</Text>
            <Text as="p" scale="p1" font="archivo" className="text-[var(--secondary-color)] uppercase">{o.desc}</Text>
          </div>
        ))}
      </div>

      <div className="md:hidden mt-8 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((o: any, i: any) => (
          <div key={i} className={cn(o ? "flex flex-col justify-between" : "invisible", "aspect-square border-y border-y-[var(--grid-color)] px-4 py-8")}>
            <Text as="p" scale="h2" font="ibm-plex" className="">{o.stat}</Text>
            <Text as="p" scale="p1" font="archivo" className="text-[var(--secondary-color)] uppercase">{o.desc}</Text>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

const STATS = [
  { stat: "25+", desc: "Years of experience" },
  { stat: "100+", desc: "Clients satisfied" },
  { stat: "24K+", desc: "Units / Year" },
  { stat: "5+", desc: "Supply to States" },
]