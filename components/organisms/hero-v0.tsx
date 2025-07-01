import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import Section from "@/components/utils/section";

export const HeroV0 = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <div className="flex-grow min-h-20"></div>
        <div className="px-4">

          <Text as="p" scale="p3" font="ibm-plex" className="">SINCE 1976</Text>
          <Text as="h1" scale="h4" font="expanded" className="-ml-0.5 mt-2 uppercase">Engineering <br />for <span className="text-[var(--primary-color)]">precision</span>,<br /><span className="text-[var(--primary-color)]">control</span> and<br /><span className="text-[var(--primary-color)]">reliability</span>.</Text>
          <Text as="p" scale="p1" font="inter" className=" mt-4 font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]">We has been delivering high-quality industrial valve solutions with precision engineering and exceptional performance.</Text>
          <div className=" mt-6 flex flex-col md:flex-row gap-4">
            <Button type="primary" />
            <Button type="secondary" />
          </div>
        </div>
        <div className="flex-grow min-h-20"></div>
      </div>
      <div className="aspect-square m-2 border border-[var(--grid-color)] bg-white overflow-hidden">
        <iframe src="https://my.spline.design/untitled-1054cea4b1f96f01251eb70be782e725/" className="-mt-[25%]" width="110%" height="150%" />
      </div>
    </div>
  </Section>
)