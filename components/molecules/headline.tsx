import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Headline = ({ label, title, desc, primary, secondary }: any) => (
  <div className="px-4 flex flex-col">
    <Text as="p" scale="p3" font="ibm-plex" className="">
      {label}
    </Text>
    <Text
      as="h2"
      scale="h5"
      className="-ml-0.5 mt-1 uppercase font-(family-name:--font-expanded)"
    >
      {title}
    </Text>
    <Text
      as="p"
      scale="p1"
      font="inter"
      className="mt-1 w-full max-w-[40rem] font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
    >
      {desc}
    </Text>
    {primary || secondary ? (
        <div className=" mt-6 flex flex-col md:flex-row gap-4">
          {primary && <Button type="primary" />}
          {secondary && <Button type="secondary" />}
        </div>
      ) : null}
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeadlineV1 = ({ label, title, desc, primary, secondary }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="px-4 flex flex-col">
      <Text as="p" scale="p3" font="ibm-plex" className="">
        {label}
      </Text>
      <Text
        as="h2"
        scale="h5"
        className="-ml-0.5 mt-1 uppercase font-(family-name:--font-expanded)"
      >
        {title}
      </Text>
      {primary || secondary ? (
        <div className=" mt-6 flex flex-col md:flex-row gap-4">
          {primary && <Button type="primary" />}
          {secondary && <Button type="secondary" />}
        </div>
      ) : null}
    </div>
    <div className="px-4 flex flex-col">
      <Text
        as="p"
        scale="p1"
        font="inter"
        className="mt-1 w-full max-w-[40rem] font-medium tracking-[-0.01em] leading-[135%] text-[var(--secondary-color)]"
      >
        {desc}
      </Text>
    </div>
  </div>
);
