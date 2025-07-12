import { Text } from "@/components/atoms/text";
import { TallyForm } from "@/components/molecules/tally-form";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";

export default function Home() {
  return (
    <Page>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <div className=" min-h-20"></div>
            <div className="px-4">
              <Text
                as="h1"
                scale="h4"
                font="expanded"
                className="-ml-0.5 mt-2 uppercase"
              >
                DOWNLOAD{" "}
                <span className="text-[var(--primary-color)]">NOW</span>
              </Text>
              {/* <Text as="p" scale="p1" font="expanded" className=" mt-12">
                ADDRESS
              </Text> */}

              <Text
                as="p"
                scale="p1"
                font="expanded"
                className="uppercase mt-12"
              >
                Access BROCHURE
              </Text>
              <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">
                {" "}
                Get instant access to our brochure and take the first step
                toward transforming your operations with Punit Valves. Simply
                fill out the form to receive your copy.
              </Text>

              <Text
                as="p"
                scale="p1"
                font="expanded"
                className="uppercase mt-12"
              >
                Innovative Product Range
              </Text>
              <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">
                Explore our diverse portfolio of industrial valves, from gate
                and globe to ball and butterfly valves, tailored to meet your
                specific needs.
              </Text>
              {/* <Text as="p" scale="p1" font="expanded" className="uppercase mt-12">
              Global Standards
              </Text>
              <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">
              Learn how our products adhere to international quality
              certifications, ensuring seamless integration into your
              operations.
              </Text> */}
            </div>
            <div className="flex-grow min-h-10"></div>
          </div>
          <div className="aspect-square m-2 border border-[var(--grid-color)] bg-white overflow-hidde px-4 flex justify-center items-center flex-col">
            <TallyForm formId="wdGJEA" />
          </div>
        </div>
      </Section>
      <LogoCloud />
    </Page>
  );
}
